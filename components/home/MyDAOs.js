import React from 'react'
import { useNetwork, useAccount } from 'wagmi'
import { useGraph } from '../hooks/useGraph'
import { USER_DAOS } from '../../graph'
import Welcome from './Welcome'
import { Flex } from '../../styles/elements'
import { Results, ResultsText } from './index'
import DaoCard from './DaoCard'
import NewDao from './NewDao'
import Headertitle from './Headertitle'

export default function MyDAOs({ allDaos }) {
  const { activeChain } = useNetwork()
  const { data: account } = useAccount()
  const { data, isLoading } = useGraph(activeChain?.id, USER_DAOS, {
    address: account?.address,
  })
  const daos = data?.['members']

  return (
    <>
      <Flex
        dir="col"
        css={{
          position: 'absolute',
          top: '7rem',
          right: '5rem',
          left: '5rem',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          alignItems: 'center',
          '@media (max-width: 768px)': {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <Headertitle />
        {daos &&
          (daos.length < 1 ? (
            <ResultsText> You haven't joined a DAO yet </ResultsText>
          ) : daos.length > 1 ? (
            <ResultsText> You've joined {daos.length} DAOs </ResultsText>
          ) : (
            daos.length === 1 && <ResultsText>You've joined {daos.length} DAO</ResultsText>
          ))}
        <Results>
          {daos && daos.map((dao) => <DaoCard key={dao['dao']['id']} dao={dao['dao']} />)} <NewDao />
        </Results>

        {<Welcome allDaos={allDaos && allDaos} />}
      </Flex>
    </>
  )
}
