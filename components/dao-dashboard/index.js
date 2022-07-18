import React from 'react'
import { Sidebar } from './home/'
import Proposals from './proposal/post'
import { Flex } from '../../styles/elements'
import NewProposal from '../../newproposal/'

export function Dashboard({ proposals }) {
  return (
    <Flex
      css={{
        background: '$background',
        position: 'relative',
        justifyContent: 'space-evenly',
        gap: '1rem',
        margin: 'auto',
      }}
    >
      <NewProposal />
      <Proposals proposals={proposals} />
      <Sidebar />
    </Flex>
  )
}
