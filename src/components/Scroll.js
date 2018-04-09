import React from 'react'
import Link from 'gatsby-link'
import { Scroller } from 'react-skroll'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import Title from './Title'
import WrapedMap from './Map'
import WavePattern from './WavePattern'
import Cite from './Cite'
import Video from './Video'
import pattern from '../assets/Pattern-Waves.svg'

const ScrollWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-width: ${key('sizes.minWidth')};
  height: 100vh;
  overflow: hidden;
`

const SectionOne = styled(Section)`
  background-color: ${key(['colors', 'gray', 3])};
`

const SectionThree = styled(Section)`
  background-color: ${key('colors.purple')};
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
  0% {
    left: -225px;
  }
  100% {
    left: 0px;
  }
`

const WaveBack = styled.div`
  position: absolute;
  width: 2250px;
  top: -50px;
  left: -225px;
  animation: ${shiftBack} 6s linear infinite;
  animation-play-state: paused;
  &:hover {
    animation-play-state: running;
  }
`

const IndexTitle = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${key(['space', 10])}px;
  font-family: ${key('fonts.headers')};
  text-align: center;
  background-color:${key('colors.black')};
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
  &:hover {
    &> h1::before {
      background-color: ${key('colors.bright.blue')}
    }
  }
`

const IndexCite = styled.div`
  position: relative;
  text-align: right;
  padding: ${key(['space', 5])}px 0;
  background: linear-gradient(180deg, ${key('colors.white')} 0%, transparent 100%);
  &> cite {
    margin: 0 auto;
    width: ${key('sizes.width')};
    display: block;
  }
`

class Scroll extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const node = this.props.data.allPrismicDocument.edges[0].node

    return (
      <ScrollWrapper>
        <Scroller>
          <SectionOne>
            <IndexTitle>
              <WaveBack><WavePattern /></WaveBack>
              <Title color='white' fontSize={0} lineHeight='64px' data={node.data} />
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
          <SectionThree >
          </SectionThree>
        </Scroller>
      </ScrollWrapper>
    )
  }
}

export default Scroll
