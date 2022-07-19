import React from 'react'
import { Flex } from '../elements/'
import { BsPersonPlusFill, BsPersonDashFill } from 'react-icons/bs'
import { GoSettings } from 'react-icons/go'
import { ExitIcon } from '@radix-ui/react-icons'
const validateProposalTag = (type) => {
  let tag
  let icon
  let tagColor
  switch (type) {
    case 'MINT':
      tag = 'MEMBER'
      icon = <BsPersonPlusFill />
      break
    case 'BURN':
      tag = 'MEMBER'
      icon = <BsPersonDashFill />
      break
    case 'CALL':
      tag = 'EXTERNAL'
      break
    case 'VPERIOD':
      tag = 'GOVERNANCE'
      break
    case 'GPERIOD':
      tag = 'GOVERNANCE'
      break
    case 'QUORUM':
      tag = 'GOVERNANCE'
      break
    case 'SUPERMAJORITY':
      tag = 'GOVERNANCE'
      break
    case 'PAUSE':
      tag = 'GOVERNANCE'
      break
    case 'EXTENSION':
      tag = 'APP'
      break
    case 'ESCAPE':
      tag = 'GOVERNANCE'
      break
    case 'DOCS':
      tag = 'GOVERNANCE'
  }

  switch (tag) {
    case 'GOVERNANCE':
      tagColor = '$purple2'
      icon = <GoSettings />
      break
    case 'MEMBER':
      tagColor = '$green2'
      break
    case 'APP':
      tagColor = '$yellow2'
      break
    case 'EXTERNAL':
      tagColor = '$yellow200'
      icon = <ExitIcon />
      break
  }
  return { tag, icon, tagColor }
}

export default function Tag({ type }) {
  const { tag, icon, tagColor } = validateProposalTag(type)
  return (
    <Flex
      css={{
        color: `$gray11`,
        background: '$gray3',
        padding: '2px 10px',
        borderRadius: '7.5px',
        border: '1px solid $gray4',
        fontWeight: '800',
        fontFamily: 'Regular',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '0.5rem',
      }}
    >
      {icon && icon}
      {tag}
    </Flex>
  )
}
