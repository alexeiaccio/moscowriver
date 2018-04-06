import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import Title from '../components/Title'
import WrapedMap from '../components/Map'
import Cite from '../components/Cite'
import Video from '../components/Video'
import pattern from '../assets/Pattern-Waves.svg'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: ${key('sizes.minWidth')};
  height: 100vh;
  overflow: hidden;
  `

const SectionOne = styled(Section)`
  background-color: ${key(['colors', 'gray', 3])};  
  `

const SectionTwo = styled(Section)`
  justify-content: center;
  align-items: center;
  background-color: ${key(['colors', 'gray', 0])};  
  background-image: url(${pattern});
  background-repeat: repeat;
  background-position: center;
`

const shiftBack = keyframes`
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 100%;
  }
`

const IndexTitle = styled.div`
  position: relative;
  width: 100%;
  height: ${key(['space', 10])}px;
  font-family: ${key('fonts.headers')};
  text-align: center;
  background-color:${key('colors.black')};
  background-image: url(${pattern});
  background-repeat: repeat;
  background-position-y: center;  
  z-index: 1000;
  cursor: pointer;   
  &> h1{
    position: relative;
    display: inline-flex;
    z-index: 2000;
    &::before {
      content: '';
      position: absolute;
      bottom: calc(${key(['fontSizes', 0])}px * .19);
      display: flex;
      width: 100%;
      height: calc(${key(['fontSizes', 0])}px * .42);
      background-color: ${key('colors.black')};
      transition: background-color .4s ease-in-out;
      z-index: -1;
    }
  }
  animation: ${shiftBack} 10s ease-in-out alternate infinite;
  animation-play-state: paused; 
  &:hover {    
    animation-play-state: running;
    &> h1::before {
      background-color: ${key('colors.bright.blue')}
    }
  }
`

const IndexCite = styled.div`
  position: relative;
  text-align: right;
  padding: ${key(['space', 7])}px 0;
  background: linear-gradient(180deg, ${key('colors.white')} 0%, transparent 100%);
  &> cite {
    margin: 0 auto;
    width: ${key('sizes.width')};
    display: block;
  }
`

const IndexPage = ({ data }) => {
  const node = data.allPrismicDocument.edges[0].node
  return (
    <div>
      <SectionOne>
        <IndexTitle>
          <Title color='white' fontSize={0} data={node.data} />
        </IndexTitle>
        <div>
          <WrapedMap />
          <IndexCite>
            <Cite color='blue' fontSize={2} data={node.data} />
          </IndexCite>
        </div>      
      </SectionOne>
      <SectionTwo>
         <Video style={{}} data={node.data} />
      </SectionTwo>
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