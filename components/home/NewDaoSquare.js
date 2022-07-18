import { Dialog, DialogTrigger, DialogContent, DialogClose } from '../../styles/Dialog'
import DeployDaoWrapper from '../deploy-dao/'
import { Box } from '../../styles/elements'

export default function NewDao() {
  return (
    <Dialog>
      <DialogTrigger>
        <Box variant="create"></Box>
      </DialogTrigger>
      <DialogContent>
        <DialogClose asChild />
        <DeployDaoWrapper />
      </DialogContent>
    </Dialog>
  )
}
