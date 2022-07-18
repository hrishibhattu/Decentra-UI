import { useRouter } from 'next/router'
import React from 'react'
import { Flex } from '../../../../styles/elements'
import Link from 'next/link'
import { Dialog, DialogTrigger, DialogContent } from '../../../../styles/Dialog'
import { NewProposalModal } from '../../newproposal/'
import { getMembers } from '../../../../graph/queries'

import { addresses } from '../../../../constants/addresses'
import REDEMPTION_ABI from '../../../../abi/KaliDAOredemption.json'

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
        zIndex: '100',
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
          DAOName
        </div>
      </Link>
<Flex align="center">
        {/* TODO: Add check for whether redemption has started */}
        <Dialog>
          <DialogTrigger>
            <Button
              variant="brutal"
              css={{
                position: 'relative',
                bottom: '0',
                right: '0',
                left: '0',
                width: '5rem',
                margin: '1rem',
              }}
            >
              {isMember ? (!isRedemptionLoading ? (redemption == 0 ? 'JOINED' : 'QUIT') : null) : 'JOIN'}
            </Button>
          </DialogTrigger>
          <DialogContent>
            {isMember ? (
              !isRedemptionLoading ? (
                redemption == 0 ? (
                  <NewProposalModal proposalProp="tribute" />
                ) : (
                  <NewProposalModal proposalProp="quit" />
                )
              ) : null
            ) : (
              <NewProposalModal proposalProp="tribute" />
            )}
          </DialogContent>
        </Dialog>
      </Flex>
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
            }}
          >
            Crowdsale
          </div>
        </Link>
      )}
    </Flex>
  )
}
