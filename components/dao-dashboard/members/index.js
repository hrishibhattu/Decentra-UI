import { styled } from '@stitches/react'
import { Box, Flex, Text } from '../../../styles/elements'
import MemberCard from './MemberCard'

const MembersBox = styled(Flex, {
  flexDirection: 'column',
  gap: '0.1rem',
  position: 'relative',
  background: '$foreground',
  minWidth: '80vw',
  justifyContent: 'center',
  alignItems: 'center',
})

export default function Members({ members }) {
  console.log('members', members)

  return (
    <>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          minWidth: '80vw',
          background: '$gray2',
          color: '$gray11',
          padding: '1rem',
          fontFamily: 'Regular',
          marginLeft: '5vw',
        }}
      >
        <Text css={{ fontWeight: '800' }}>Member</Text>
        <Text css={{ fontWeight: '800' }}>Shares</Text>
        <Text css={{ fontWeight: '800' }}>Percentage</Text>
      </Box>
      {members &&
        members.members.map((member) => (
          <MemberCard member={member} key={member.address} totalSupply={members['token']['totalSupply']} />
        ))}
    </>
  )
}
