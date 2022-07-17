import { useRouter } from 'next/router'
import React from 'react'
import { Flex } from '../../../../styles/elements'
import Link from 'next/link'

export default function Menu({ saleActive }) {
  const router = useRouter()

  const links = [
    {
      title: 'Home',
      pathname: '/daos/[chainId]/[dao]/',
      query: {
        chainId: router.query.chainId,
        dao: router.query.dao,
      },
    },
    {
      title: 'Treasury',
      pathname: '/daos/[chainId]/[dao]/treasury',
      query: {
        chainId: router.query.chainId,
        dao: router.query.dao,
      },
    },
    {
      title: 'Members',
      pathname: '/daos/[chainId]/[dao]/members',
      query: {
        chainId: router.query.chainId,
        dao: router.query.dao,
      },
    },
    {
      title: 'crowdsale',
      pathname: '/daos/[chainId]/[dao]/crowdsale',
      query: {
        chainId: router.query.chainId,
        dao: router.query.dao,
      },
    },
    {
      title: 'Info',
      pathname: '/daos/[chainId]/[dao]/info',
      query: {
        chainId: router.query.chainId,
        dao: router.query.dao,
      },
    },
  ]

  return (
    <Flex
      css={{
        position: 'fixed',
        flexDirection: 'column',
        background: '#2f3136',
        width: '200px',
        height: '100%',
        paddingTop: '10vh',
        zIndex: '100',
      }}
    >
      {links.map((link, index) => {
        return (
          <Link
            href={{
              pathname: link.pathname,
              query: link.query,
            }}
            key={`${link.title}-${index}`}
          >
            <div
              style={{
                marginTop: '0em',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '10px',
                height: '35px',
              }}
            >
              {link.title}
            </div>
          </Link>
        )
      })}
    </Flex>
  )
}
