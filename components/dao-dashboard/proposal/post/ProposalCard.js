import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useEnsName } from 'wagmi'
import { truncateAddress } from './../../../../utils/'
import { Flex, Box, Text } from '../../../../styles/elements'
import Tag from '../../../../styles/proposal/Tag'
import Vote from '../vote'
import Status from '../Status'
import { fetchProposal, willProcess } from '../helpers'

export const ProposalCard = ({ proposal }) => {
  const router = useRouter()
  const ensName = useEnsName({
    address: proposal['proposer'],
    chainId: 1,
  })

  const proposer = ensName.data != null ? ensName.data : truncateAddress(proposal['proposer'])
  // const [willProcess, setWillProcess] = useState()

  const canProcess = () => {
    const timeLeft =
      new Date().getTime() - new Date(proposal?.dao?.votingPeriod * 1000 + proposal?.votingStarts * 1000).getTime()

    if (proposal?.sponsored === true) {
      if (timeLeft > 0) {
        if (proposal?.status === null) {
          return true
        }
      }
    }
    return false
  }

  // useEffect(async () => {
  //   setWillProcess(undefined)
  //   if (canProcess()) {
  //     try {
  //       const res = await fetchProposal(router.query.chainId, router.query.dao, proposal['serial'])
  //       if (res) {
  //         const res2 = await fetchProposal(router.query.chainId, router.query.dao, res['prevProposal'].toString())

  //         if (res[2].toString() == 0) {
  //           console.log('willProcess', proposal['serial'])
  //           setWillProcess(true)
  //         }
  //       }
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  // }, [proposal['serial']])

  return (
    <Flex
      dir="row"
      gap="sm"
      css={{
        padding: '1rem 0.5rem 1rem 0.5rem',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
background: '#3d4046',
    marginBottom: '25px',
    borderRadius: '12px',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
        '&:hover': {
          background: '$gray800',
        },
      }}
    >
      <Flex
        dir="col"
        gap="md"
        minWidth="10%"
        height="100%"
        css={{
          paddingRight: '1rem',
        }}
      >
        <Vote proposal={proposal} />
      </Flex>
      <Link
        href={{
          pathname: `/daos/[chainId]/[dao]/proposals/${proposal['serial']}`,
          query: {
            chainId: router.query.chainId,
            dao: router.query.dao,
          },
        }}
        passHref
      >
        <Flex
          dir="col"
          gap="sm"
          css={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Flex
            gap="md"
            css={{
              minWidth: '50rem',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Flex
              color="foreground"
              gap="sm"
              dir="row"
              css={{
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Text
                css={{
                  fontFamily: 'Regular',
                  color: '$gray12',
                }}
              >
                #{proposal?.serial}
              </Text>
              <Box variant="id">{proposer}</Box>
            </Flex>
            <Flex gap="sm">
              {proposal?.sponsored === false && <Status status={'unsponsored'} />}
              {canProcess() === true && <Status status="canProcess" />}
              {proposal?.status === true && <Status status="passed" />}
              {proposal?.status === false && <Status status="failed" />}
              <Tag type={proposal['proposalType']} />
            </Flex>
          </Flex>
          <Box>
            {proposal['description'].length > 100
              ? proposal['description'].slice(0, 100) + '...'
              : proposal['description']}
          </Box>
        </Flex>
      </Link>
    </Flex>
  )
}
