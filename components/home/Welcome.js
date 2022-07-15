import React from 'react'
import { Flex } from '../../styles/elements'
import ActivityLog from './ActivityLog'

export default function Welcome({ allDaos }) {
  return (
    <Flex dir="row" gap="md">
      <Text> We help you create a DAO without code. In less than 5 minutes.
</Text>
      <ActivityLog allDaos={allDaos && allDaos} />
      {/* <Featured /> */}
    </Flex>
  )
}
