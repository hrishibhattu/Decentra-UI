import React from 'react'
import NewProposal from './NewProposal'
import Menu from './Menu'
import { Flex } from '../../../../styles/elements'

export default function Sidebar({ crowdsale, heading, data }) {
  return (
    <Flex
      css={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Menu heading={data} saleActive={crowdsale?.active} />
    </Flex>
  )
}
