import { styled } from '../../styles/stitches.config'
import MyDAOs from './MyDAOs'
import NewDaoSquare from './NewDaoSquare'

export const ResultsText = styled('div', {
  // TODO: Add font Monument Grotesk
  color: '$foreground',
  fontSize: '18px',
  fontFamily: 'Italic',
  fontStyle: 'italic',
  lineHeight: '100%',
  fontWeight: '500',
  marginBottom: '0.6rem',
})

export const Results = styled('div', {
  display: 'grid',
  gap: '1.5rem',
  marginBottom: '5rem',
  paddingLeft: '0rem',

  '@media (min-width: 840px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'auto',
    width: '1008px',
  },
})

export { MyDAOs, NewDaoSquare }
