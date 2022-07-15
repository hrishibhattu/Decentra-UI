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

        '&:hover': {
          background: '$violet5',
          color: '$mauve12',
          border: '1px solid $violet6',
        },
        '&:active': {
          background: '$violet6',
          color: '$mauve12',
          border: '1px solid $violet7',
        },

        '@media (max-width: 768px)': {
          fontSize: '18px',
          minWidth: '25px',
        },
      }}
    >
      We help you create a DAO without code. In less than 5 minutes.
    </Flex>
  )
}
