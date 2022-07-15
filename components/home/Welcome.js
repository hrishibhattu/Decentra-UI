import React from 'react'
import { Flex } from '../../styles/elements'
import ActivityLog from './ActivityLog'

export default function Welcome({ allDaos }) {
  return (
    <Flex dir="row" gap="md">
      <ActivityLog allDaos={allDaos && allDaos} />
      {/* <Featured /> */}
    </Flex>
  )
}
