import React from 'react'
import { Flex } from '../../styles/elements'

export default function Headertitle() {
  return (
    <Flex
      css={{
        position: 'relative',
        color: '#bdbdbd',
        fontSize: '54px',
        fontFamily: 'Bold',
        maxWidth: '1008px',
        margin: '35px 0px 80px 0',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.1',
      }}
    >
      Create your DAO, mint your token today with 0 code written.
    </Flex>
  )
}
