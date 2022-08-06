import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { MoralisProvider } from 'react-moralis'
import globalStyles from '../styles/globalStyles'

const { chains, provider } = configureChains(
  [chain.optimism],
  [infuraProvider({ infuraId: process.env.NEXT_PUBLIC_INFURA_ID }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'KALI',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp({ Component, pageProps }) {
  globalStyles()

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={darkTheme({
          accentColor: 'linear-gradient(45deg, #bd4646, #f44cf3b0)',
          accentColorForeground: '#ededed',
        })}
      >
        <MoralisProvider serverUrl="https://amaolyvrejmm.usemoralis.com:2053/server" appId="NEXT_PUBLIC_MORALIS_ID">
          <Component {...pageProps} />
        </MoralisProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
