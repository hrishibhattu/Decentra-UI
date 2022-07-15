import React from 'react'
import { Flex } from '../../styles/elements'

export default function Headertitle() {
  return (
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
      }}
    >
      We help you create a DAO without code. In less than 5 minutes.
    </Flex>
  )
}
