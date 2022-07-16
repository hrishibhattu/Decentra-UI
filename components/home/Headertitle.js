import React from 'react'
import { Flex } from '../../styles/elements'

export default function Headertitle() {
  return (
    <Flex
      css={{
        position: 'relative',
        color: '#bdbdbd',
        fontSize: '50px',
        fontFamily: 'Screen',
        maxWidth: '1008px',
        margin: '35px 0px 80px 0',
        line-height: '1.1',
      }}
    >
      We help you create a DAO without code. In less than 5 minutes.
    </Flex>
  )
}
