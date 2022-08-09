/* eslint-disable @next/next/link-passhref */
import { useRouter } from 'next/router'
import React from 'react'
import { Flex } from '../../../../styles/elements'
import Link from 'next/link'
import DaoProfile from '../../daoprofile'

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
        width: '250px',
        height: '100%',
        top: '75px'
        // zIndex: '100',
      }}
    >
      <Link
        href={{
          pathname: '/daos/[chainId]/[dao]',
          query: {
            chainId: router.query.chainId,
            dao: router.query.dao,
          },
        }}
      >
        <div
          style={{
            marginTop: '0em',
            color: '#bdbdbd',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            height: '74px',
            borderBottom: '1px solid #a3a3ac1a',
            boxShadow: '0 1px 0 #04040533, 0 1.5px 0 #0606070d, 0 2px 0 #0404050d',
            fontSize: '28px',
          }}
        >
          something
        </div>
      </Link>
      <DaoProfile />
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
                color: '#bdbdbd',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                height: '35px',
                cursor: 'pointer',
              }}
            >
              {link.title}
            </div>
          </Link>
        )
      })}
      {saleActive === true && (
        <Link
          href={{
            pathname: '/daos/[chainId]/[dao]/crowdsale',
            query: {
              chainId: router.query.chainId,
              dao: router.query.dao,
            },
          }}
        >
          <div
            style={{
              marginTop: '0em',
              color: '#bdbdbd',
              display: 'flex',
              alignItems: 'center',
              padding: '0 20px',
              height: '35px',
              cursor: 'pointer',
            }}
          >
            Crowdsale
          </div>
        </Link>
      )}
    </Flex>
  )
}
