import React from 'react'
import { Flex } from '../../styles/elements'
import { PlusIcon } from '@radix-ui/react-icons'
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '../../styles/Dialog'
import DeployDaoWrapper from '../deploy-dao/'

export default function NewDao() {
  return (
    <Dialog>
      <DialogTrigger>
        <Flex
          align="center"
          dir="row"
          css={{
            position: 'relative',
            height: '96.18px',
            border: '1px solid red',
            color: '#898888c2',
            border: '2px solid #737373ad',
            padding: '0.7rem',
            fontSize: '20px',
            fontFamily: 'Bold',
            borderRadius: '15px',
            gap: '20px',

            '&:hover': {
              background: '#202124',
              border: '2px solid #5f6063',
            },

            '@media (max-width: 768px)': {
              fontSize: '18px',
              minWidth: '25px',
            },
          }}
        >
          <PlusIcon height="20px" width="20px" /> Create
        </Flex>
      </DialogTrigger>
      <DialogContent>
        <DialogClose asChild />
        <DeployDaoWrapper />
      </DialogContent>
    </Dialog>
  )
}
