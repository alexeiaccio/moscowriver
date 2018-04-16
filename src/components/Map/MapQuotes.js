import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'
import SectorsDefs from './SectorsDefs'

const QoutesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 100%;
  justify-content: center;
  align-items: flex-start;
  //
  & > svg {
    margin-top: calc(50vh - 380px);
    margin-left: -34px;
    transform: scale(1.1);
  }
`

const Sector = styled.g`
  fill: ${({color}) => key('colors.' + color)};
  cursor: pointer;
  opacity: 0.5;
  transition: all .2s ease-in-out;
  //
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
  }
  & .shade {
    opacity: 0.5;
  }
`


const getColor = key => {
  const colors = {
    10: 'green',
    20: 'violet',
    30: 'purple',
    40: 'pink',
    50: 'green',
    61: 'yellow',
    62: 'purple',
    70: 'violet',
    80: 'pink',
    90: 'purple',
    100: 'violet',
    110: 'yellow',
    120: 'green',
    130: 'yellow',
    140: 'violet',
    150: 'purple',
    161: 'yellow',
    162: 'pink',
    170: 'pink',
    181: 'green',
    182: 'purple',
    190: 'violet',
    200: 'yellow',
    220: 'purple',
    230: 'pink',
    240: 'yellow'
  }
  return colors[key]
}

export const MapQuotes = ({data}) => {
  return (
    <QoutesWrapper>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='609' height='514'
        viewBox='0 0 609 514'
        >
        {data.map(({node: {uid}}) =>{
          return <Sector
            key={uid}
            color={getColor(uid)}
            className='sector'
            >
              <use href={`#${uid}a`} className='shade' />
              <use href={`#${uid}b`} />
            </Sector>}
        )}
        <SectorsDefs />
      </svg>
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