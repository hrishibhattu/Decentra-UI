import { Pencil1Icon } from '@radix-ui/react-icons'
import React, { useMemo } from 'react'
import { Flex, Text } from '../../../../styles/elements'
import { ProposalCard } from './ProposalCard'
import { NewProposalModal } from '../../newproposal'
import { PlusIcon } from '@radix-ui/react-icons'
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '../../../../styles/Dialog'

export default function Proposals({ proposals }) {
  // filtering out cancelled proposals
  const memoizedProposals = useMemo(
    () => proposals.sort((a, b) => b.serial - a.serial).filter((p) => !(p.cancelled == true)),
    [proposals],
  )

  return (
    <Flex dir="col" gap="md">
      <Dialog>
        <DialogTrigger>
          <Flex
            align="center"
            dir="row"
            css={{
              position: 'relative',
              height: '96.18px',
              color: '#898888c2',
              border: '2px solid #737373ad',
              padding: '0.7rem',
              fontSize: '20px',
              fontFamily: 'Screen',
              borderRadius: '15px',
              gap: '20px',
              cursor: 'pointer',
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
            <PlusIcon height="20px" width="20px" /> New proposal
          </Flex>
        </DialogTrigger>
        <DialogContent onInteractOutside={(event) => event.preventDefault()}>
          <NewProposalModal proposalProp={'menu'} />
          <DialogClose />
        </DialogContent>
      </Dialog>
      <Flex dir="col">
        {memoizedProposals.length > 0 ? (
          memoizedProposals.map((proposal) => <ProposalCard key={proposal['id']} proposal={proposal} />)
        ) : (
          <Flex gap="sm" align="center">
            <Text
              css={{
                fontFamily: 'Regular',
              }}
            >
              No proposals. Make one by clicking the pencil icon.
            </Text>
            <Pencil1Icon />
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
