import React from 'react'
import { Flex } from '../../styles/elements'

export default function Headertitle() {
  return (
    <Flex
      dir="row"
      css={{
        position: 'relative',
        color: '#bdbdbd',
        padding: '0.7rem',
        fontSize: '50px',
        fontFamily: 'Screen',
      }}
    >
      We help you create a DAO without code. In less than 5 minutes.
    </Flex>
  )
}
