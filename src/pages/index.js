import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import Title from '../components/Title'
import Cite from '../components/Cite'
import Video from '../components/Video'
import pattern from '../assets/Pattern-Waves.svg'

const shiftBack = keyframes`
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 100%;
  }
`

const IndexTitle = styled.div`
  font-family: ${key('fonts.headers')};
  width: 100%;
  height: 75px;
  text-align: center;
  background-color: ${key(['palette', 'black', 0])};
  background-image: url(${pattern});
  background-repeat: repeat;
  background-position-y: center;
  cursor: pointer;
  animation: ${shiftBack} 10s ease-in-out alternate infinite;
  animation-play-state: paused;
  &:hover {    
    animation-play-state: running;
    & > *::before {
      background-color: ${key(['palette', 'blue', 1])}
    }
  }
`

const IndexPage = ({ data }) => {
  const node = data.allPrismicDocument.edges[0].node
  return (
    <div>
      <IndexTitle>
        <Title color='white' fontSize={0} data={node.data} />
      </IndexTitle>
      <Cite fontSize={2} data={node.data} />
      {/* <Video data={node.data} /> */}
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allPrismicDocument(filter: {type: {eq: "homepage"}}) {
      edges {
        node {
          ...TitleFragment
          ...CiteFragment
          ...VideoFragment
        }
      }
    }
  }
`