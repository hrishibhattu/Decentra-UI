import { Flex } from '../../styles/elements'
import Log from './Log'

export default function ActivityLog({ allDaos }) {
  return (
    <Flex dir="col">
      <Flex
        as="h2"
        css={{
          fontSize: '26px',
          minWidth: '25rem',
          height: 'auto',
          paddingBottom: '0.5rem',
          justifyContent: 'space-between',
          alignItems: 'center',

          '@media (max-width: 768px)': {
            fontSize: '26px',
            minWidth: '20rem',
          },
        }}
      >
        All DAOs
      </Flex>
      {allDaos && <Log allDaos={allDaos && allDaos} />}
    </Flex>
  )
}
