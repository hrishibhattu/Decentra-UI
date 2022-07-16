import React from 'react'
import { Flex } from '../../../../styles/elements'
import Link from 'next/link'
import { styled } from '../../../../styles/stitches.config'
import { bounce } from '../../../../styles/animation'
import { useRouter } from 'next/router'
import { CHECK_APPS } from '../../../../graph'
import { RiInformationFill, RiInformationLine } from 'react-icons/ri'
import {
  BsFillPiggyBankFill,
  BsPiggyBank,
  BsPeople,
  BsFillPeopleFill,
  BsBriefcase,
  BsBriefcaseFill,
} from 'react-icons/bs'
import { GoHome } from 'react-icons/go'
import { GiCoins, GiBriefcase } from 'react-icons/gi'
import { HiHome, HiOutlineHome } from 'react-icons/hi'

const Icon = styled('span', {
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '6px',
  alignItems: 'flex-satrt',
  background: '$background',
  maxWidth: '2rem',
  borderRadius: '100%',
  height: '25px',
  width: '25px',

  '&:hover': {
    background: '$gray5',
  },
  '& svg': {
    color: `$gray7`,
    '&:hover': {
      color: `$gray8`,
    },
    '&:active': {
      color: `$gray9`,
    },
  },
})

export default function Menu({ saleActive }) {
  const router = useRouter()
  const path = router.pathname

  return (
    <Flex
      css={{
        position: 'fixed',
        flexDirection: 'column',
        gap: '2rem',
        background: '#2f3136',
        width: '200px',
        paddingLeft: '2em',
        height: '100%',
      }}
    >
      <Icon
        as="a"
        css={{
          width: '250px',
          background: '#2f3136',
          maxWidth: '250px',
          borderRadius: '0',
          height: '74px',
          padding: '0px',
          borderBottom: '1px solid #a3a3ac1a',
          boxShadow: '0 1px 0 #04040533, 0 1.5px 0 #0606070d, 0 2px 0 #0404050d',
        }}
      >
        <Link
          href={{
            pathname: '/daos/[chainId]/[dao]/info',
            query: {
              chainId: router.query.chainId,
              dao: router.query.dao,
            },
          }}
          passHref
        >
          DAOName
        </Link>
      </Icon>
      <Icon>
        <Link
          href={{
            pathname: '/daos/[chainId]/[dao]/',
            query: {
              chainId: router.query.chainId,
              dao: router.query.dao,
            },
          }}
          passHref
        >
          <h3 style={{ color: 'white' }}>Home</h3>
        </Link>
      </Icon>
      <Icon>
        <Link
          href={{
            pathname: '/daos/[chainId]/[dao]/treasury',
            query: {
              chainId: router.query.chainId,
              dao: router.query.dao,
            },
          }}
          passHref
        >
          <h3 style={{ color: 'white' }}>Treasury</h3>
        </Link>
      </Icon>

      <Icon>
        <Link
          href={{
            pathname: '/daos/[chainId]/[dao]/members',
            query: {
              chainId: router.query.chainId,
              dao: router.query.dao,
            },
          }}
          passHref
        >
          <h3 style={{ color: 'white' }}>Members</h3>
        </Link>
      </Icon>
      {saleActive === true && (
        <Icon>
          <Link
            href={{
              pathname: '/daos/[chainId]/[dao]/crowdsale',
              query: {
                chainId: router.query.chainId,
                dao: router.query.dao,
              },
            }}
          >
            crowdsale
          </Link>
        </Icon>
      )}
      {/* 
        TODO: 
        - Conditional on whether crowdsale active 
        - Add outline coin stack icon
      */}
      <Icon as="a">
        <Link
          href={{
            pathname: '/services',
          }}
          style={{ color: 'white' }}
          passHref
        >
          <h3 style={{ color: 'white' }}>Services</h3>
        </Link>
      </Icon>
      <Icon as="a">
        <Link
          style={{ color: 'white' }}
          href={{
            pathname: '/daos/[chainId]/[dao]/info',
            query: {
              chainId: router.query.chainId,
              dao: router.query.dao,
            },
          }}
          passHref
        >
          <h3 style={{ color: 'white' }}>Info</h3>
        </Link>
      </Icon>
    </Flex>
  )
}
