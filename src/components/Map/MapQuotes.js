import React from 'react'
import SectorsDefs from './SectorsDefs'
import { getSectorColor } from './getSectorColor'
import { QoutesWrapper,
  Markers,
  Sector,
} from 'Styled'

export const MapQuotes = ({data}) => {
  return (
    <QoutesWrapper>
      <Markers
        xmlns='http://www.w3.org/2000/svg'
        width='609' height='514'
        viewBox='0 0 609 514'
        >
        {data.map(({node: {uid}}) =>{
          return <Sector
            key={uid}
            color={getSectorColor(uid)}
            className='sector'
            >
              <use href={`#${uid}a`} className='shade' />
              <use href={`#${uid}b`} />
            </Sector>}
        )}
        <SectorsDefs />
      </Markers>
    </QoutesWrapper>
  )
}

export const query = graphql`
  fragment QuotesFragment on PrismicDocument {
    uid
    data {
      title {
        text
      }
      quote {
        text
      }
      image {
        url
      }
      body {
        primary {
          link {
            uid
          }
          placeholder
        }
      }
    }
  }
`