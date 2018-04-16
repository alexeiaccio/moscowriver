import React from 'react'
import styled from 'styled-components'

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
  & > svg > .sector {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity, filter 0.2s ease;
    //
    &:hover {
      opacity: 1;
    }
    &.active {
      opacity: 1;
    }
    & .cls-1,
    & .cls-13,
    & .cls-2 {
      fill: #c4549a;
    }
    & .cls-1,
    & .cls-10,
    & .cls-12,
    & .cls-13,
    & .cls-14,
    & .cls-3,
    & .cls-5,
    & .cls-7,
    & .cls-9 {
      opacity: 0.5;
    }
    & .cls-3,
    & .cls-4,
    & .cls-9 {
      fill: #945ba4;
    }
    & .cls-12,
    & .cls-5,
    & .cls-6 {
      fill: #f05a5a;
    }
    & .cls-14,
    & .cls-7,
    & .cls-8 {
      fill: #efc319;
    }
    & .cls-10,
    & .cls-11 {
      fill: #4eb96f;
    }
  }
`

export const MapQuotes = ({data}) => {
  const getMarker = node => node.data.marker[0].text.replace(/className/gi, 'class')
  return (
    <QoutesWrapper>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='609' height='514'
        viewBox='0 0 609 514'
        >
        {data.map(({node}) =>{
          return <g
            key={node.uid}
            className='sector' dangerouslySetInnerHTML={{ __html: getMarker(node) }} />}
        )}
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
      marker {
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