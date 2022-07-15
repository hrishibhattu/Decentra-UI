import React from 'react'
import { Flex } from '../../styles/elements'

export default function Headertitle() {
  return (
    <Flex
      dir="row"
      css={{
        position: 'relative',
        color: '#bdbdbd',
        fontSize: '50px',
        fontFamily: 'Screen',
        maxWidth: '1008px',
        marginBottom: '80px',
      }}
    >
      We help you create a DAO without code. In less than 5 minutes.
    </Flex>
  )
}
