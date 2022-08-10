import React, { useEffect, useState } from 'react'
import { Text, Button, Flex } from '../../../styles/elements'
import { Dialog, DialogTrigger, DialogContent } from '../../../styles/Dialog'
import { NewProposalModal } from '../newproposal'
import { useBalance, useAccount, useContractRead } from 'wagmi'
import { getMembers } from '../../../graph/queries'
import { addresses } from '../../../constants/addresses'
import { useRouter } from 'next/router'
import REDEMPTION_ABI from '../../../abi/KaliDAOredemption.json'

export default function DaoProfile() {
  const router = useRouter()
  const daoAddress = router.query.dao
  const daoChain = Number(router.query.chainId)
  const [members, setMembers] = useState()
  const [isMember, setIsMember] = useState(false)

  const { data: user } = useAccount()
  const { data: balance } = useBalance({
    addressOrName: daoAddress,
    chainId: daoChain,
    watch: true,
  })
  const { data: redemption, isLoading: isRedemptionLoading } = useContractRead(
    {
      addressOrName: addresses[daoChain],
      contractInterface: REDEMPTION_ABI,
    },
    'redemptionStarts',
    {
      args: daoAddress,
      chainId: Number(daoChain),
    },
  )

  useEffect(() => {
    let mounted = true
    const fetchMembers = async () => {
      const result = await getMembers(Number(daoChain), daoAddress)
      setMembers(result?.data?.daos?.[0])
    }

    fetchMembers()
    return () => {
      mounted = false
    }
  })

  useEffect(() => {
    if (members?.members) {
      for (let i = 0; i < members?.members.length; i++) {
        if (members?.members[i].address.toLowerCase() === user?.address.toLowerCase()) {
          setIsMember(true)
          console.log('member found')
        }
      }
    } else {
      setIsMember(false)
      console.log('members not found')
    }
  }, [user, members])

  return (
    <>
      <Flex dir={'col'} align={'center'} css={{ borderBottom: '1px solid #a3a3ac1a' }}>
        <Text style={{ margin: '15px', fontSize: '22px' }}>This community has {members?.members.length} members</Text>
        <Dialog>
          <DialogTrigger>
            <Button
              // variant="brutal"
              css={{
                position: 'relative',
                bottom: '0',
                right: '0',
                left: '0',
                width: '220px',
                height: '45px',
                marginBottom: '15px',
                color: '#bdbdbd',
                border: '2px solid #737373ad',
                fontFamily: 'Screen',
                borderRadius: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                '&:hover': {
                  background: '$violet5',
                  color: '$mauve12',
                  border: '2px solid $violet6',
                },
                '&:active': {
                  background: '$violet6',
                  color: '$mauve12',
                  border: '2px solid $violet7',
                },

                '@media (max-width: 768px)': {
                  fontSize: '18px',
                  minWidth: '25px',
                },
              }}
            >
              {isMember
                ? !isRedemptionLoading
                  ? redemption == 0
                    ? 'JOINED'
                    : 'QUIT'
                  : null
                : 'APPLY FOR MEMBERSHIP'}
            </Button>
          </DialogTrigger>
          <DialogContent>
            {isMember ? (
              !isRedemptionLoading ? (
                redemption == 0 ? (
                  <NewProposalModal proposalProp="tribute" />
                ) : (
                  <NewProposalModal proposalProp="quit" />
                )
              ) : null
            ) : (
              <NewProposalModal proposalProp="tribute" />
            )}
          </DialogContent>
        </Dialog>
      </Flex>
    </>
  )
}
