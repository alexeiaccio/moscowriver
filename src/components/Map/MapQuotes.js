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


const getColor = () => {
  const colors = [
    'blue',
    'green',
    'yellow',
    'pink',
    'purple',
    'violet'
  ]
  const random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

export const MapQuotes = ({data}) => {
  return (
    <QoutesWrapper>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='609' height='514'
        viewBox='0 0 609 514'
        >
        {data.map(({node}) =>{
          return <Sector
            key={node.uid}
            color={getColor()}
            className='sector'
            >
              <use href={`#${node.uid}a`} className='shade' />
              <use href={`#${node.uid}b`} />
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