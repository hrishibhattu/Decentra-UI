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
  justifyContent: 'center',
  padding: '6px',
  alignItems: 'center',
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
        width: '250px',
        height: '100%',
      }}
    >
        <Link
          href={{
               pathname: '/',
               }},
          css={{
    width: '250px',
    height: '74px',
    background: '#2f3136',
    maxWidth: '250px',
    borderRadius: '0px',
    padding: '0px',
    borderBottom: '1px solid #a3a3ac1a',
    boxShadow: '0 1px 0 #04040533, 0 1.5px 0 #0606070d, 0 2px 0 #0404050d',
              }}
              >
              DAOName              
        </Link>
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
          {path.includes('treasury') || path.includes('members', 'info') || path.includes('info') ? (
            <HiOutlineHome size={30} />
          ) : (
            <HiHome size={30} />
          )}
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
          {path.includes('treasury') ? <BsFillPiggyBankFill size={30} /> : <BsPiggyBank size={30} />}
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
          {path.includes('members') ? <BsFillPeopleFill size={30} /> : <BsPeople size={30} />}
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
            <Icon as="a">
              <GiCoins size={30} />
            </Icon>
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
          passHref
        >
          {path.includes('services') ? <BsBriefcaseFill size={30} /> : <BsBriefcase size={30} />}
        </Link>
      </Icon>
      <Icon as="a">
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
          {path.includes('info') ? <RiInformationFill size={30} /> : <RiInformationLine size={30} />}
        </Link>
      </Icon>
    </Flex>
  )
}
