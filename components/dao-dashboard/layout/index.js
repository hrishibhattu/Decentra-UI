import Layout from '../../layout'
import Sidebar from './sidebar/'
import { Box } from '../../../styles/elements'

export default function DaoLayout({ heading, data, crowdsale, children, props }) {
  return (
    <Layout heading={heading} {...props}>
      <Sidebar heading={heading} crowdsale={crowdsale} data={data} />
      <Box
        css={{
          position: 'absolute',
          top: '7rem',
          left: '250px',
          width: 'calc(100% - 250px)',
        }}
      >
        {children}
      </Box>
    </Layout>
  )
}
