import React from 'react'
import Link from 'next/link'
import { styled } from '../../styles/stitches.config'
import { Flex, Text } from '../../styles/elements'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const StyledHeader = styled(Flex, {
  borderBottom: '1px solid #a3a3ac1a',
  boxShadow: '0 1px 0 #04040533, 0 1.5px 0 #0606070d, 0 2px 0 #0404050d',
  background: '#36393f',
  width: '100%',
  position: 'fixed',
  left: '0',
  right: '0',
  top: '0',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: '99',
})

export default function Header({ heading, props }) {
  return (
    <StyledHeader {...props}>
      <Flex
        css={{
          position: 'relative',
          width: '100%',
          height: '5rem',
          padding: '0px 1.5rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '5rem',
          '@media (max-width: 1040px)': {
            justifyContent: 'flex-end',
            margin: '0',
          },
        }}
      >
        <Link href="/">
          <Text
            as="h1"
            variant="heading"
            css={{
              fontFamily: 'Screen',
              '@media (max-width: 1040px)': {
                display: 'none',
              },
            }}
          >
            {heading}
          </Text>
        </Link>

        <ConnectButton>Connect</ConnectButton>
      </Flex>
    </StyledHeader>
  )
}
