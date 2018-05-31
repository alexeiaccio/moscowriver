import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import patternWaves from '../../assets/PatternWaves.svg'
import SmallWave from '../../assets/SmallWave.svg'
import ArrowIconWhite from '../../assets/ArrowIconWhite.svg'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-width: ${key('sizes.minWidth')};
  overflow: hidden;
`

export { Section }

export const SectionOne = styled(Section)`
  height: 100vh;
  background-color: ${key(['colors', 'gray', 4])};
  background-image: url(${patternWaves});
  background-repeat: repeat;
  background-position: center;
`

export const ContentWrapper = styled.div`
  flex: 1 100%;
  z-index: 4000;
`

export const SectionTwo = styled(Section)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${key(['colors', 'gray', 0])};
  background-image: url(${patternWaves});
  background-repeat: repeat;
  background-position: center;
`

export const SectionThree = styled(Section)`
  justify-content: center;
  align-items: center;
  height: calc(100vh - 75px - 240px);
  background-color: ${key('colors.white')};
  background-image: url(${patternWaves});
  background-repeat: repeat-x;
  background-position-y: calc(100% + 250px);
`

export const DescriptionWrapper = styled.div`
  padding: 0 0 ${key(['space', 9])}px 0;
  width: 100%;
  position: relative;
  color: ${key('colors.text')};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 3])};
`

const shiftBack = keyframes`
  0% {
    left: -14px;
  }
  100% {
    left: 0px;
  }
`

export const Column = styled.div`
  padding: 0px ${key(['space', 5])}px;
  &:first-child {
    &> a {
      left: -100px;
      &> span {
        transform: rotateZ(-90deg) translateY(20px);
      }
      &:hover {
        left: -50px;
        &> span {
          transform: rotateZ(0) translate(20px, 0px);
        }
      }
    }
  }
  &:last-child {
    &> a {
      right: -100px;
      &> span {
        transform: rotateZ(-90deg) translateY(-25px);
      }
      &:hover {
        right: -50px;
        &> span {
          transform: rotateZ(0) translate(-25px, 0px);
        }
      }
    }
  }
  &> p a {
    color: ${key('colors.text')};
    text-decoration: none;
    font-weight: ${key('fontWeights.semibold')};
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 20px;
      display: block;
      height: 6px;
      background: url(${SmallWave}) repeat-x;
      animation: ${shiftBack} .4s linear infinite;
      animation-play-state: paused;
    }
    &:hover::after {
      animation-play-state: running;
    }
  }
`
