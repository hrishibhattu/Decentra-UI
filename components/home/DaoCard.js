import { useRouter } from 'next/router'
import { styled } from '../../styles/stitches.config'
import { truncateAddress } from '../../utils/'
import { Flex, Box } from '../../styles/elements'
import { getDaoChain } from '../../utils'
import { useNetwork } from 'wagmi'
import { getRandomEmoji } from '../../utils/'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'

const Name = styled('div', {
  fontFamily: 'arial',
})

const Address = styled('div', {
  fontFamily: 'Screen',
})

// disable when not active chain
export default function DaoCard({ dao, chain }) {
  const router = useRouter()
  const { activeChain } = useNetwork()

  const gotoDAO = async () => {
    if (chain != null) {
      router.push(`/daos/${chain}/${dao['id']}`)
    } else {
      if (activeChain) {
        router.push(`/daos/${activeChain?.id}/${dao['id']}`)
      } else {
        const chainId = await getDaoChain(dao['id'])
        if (chainId) {
          router.push(`/daos/${chainId}/${dao['id']}`)
        }
      }
    }
  }

  return (
    <Box
      as="a"
      variant="card"
      onClick={gotoDAO}
      css={{
        height: '150px',
        '@media (max-width: 768px)': {
          fontSize: '18px',
          minWidth: '20rem',
          height: 'auto',
        },
      }}
    >
      <Box
        css={{
          background: '$gray9',
          borderRadius: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60px',
          width: '60px',
        }}
      >
        {getRandomEmoji(dao['id'])}
      </Box>
      <Flex dir="col" gap="sm">
        <Name
          css={{
            fontSize: '24px',
            marginBottom: '1em',
          }}
        >
          {dao['token']['name']}
        </Name>
        {dao['members'] != undefined && <Name>{dao['members'].length} Members</Name>}
        <Address>{truncateAddress(dao['id'])}</Address>
      </Flex>
    </Box>
  )
}
