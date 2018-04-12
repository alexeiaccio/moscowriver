import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'
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
  height: 100vh;
  overflow: hidden;
`

export const SectionOne = styled(Section)`
  background-color: ${key(['colors', 'gray', 3])};
`

export const SectionTwo = styled(Section)`
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
  height: calc(100vh - 75px - 270px);
  background-color: ${key('colors.white')};
`

export const DescriptionWrapper = styled.div`
  padding: ${key(['space', 9])}px 0;
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
  &:first-child {
    padding-right: ${key(['space', 5])}px;
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
    padding-left: ${key(['space', 5])}px;
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

export const RoundButton = styled(Link)`
  position: absolute;
  top: 0;
  display: block;
  width: 225px;
  height: 225px;
  border-radius: 50%;
  overflow: hidden;
  text-decoration: none;
  transition: all .4s ease-in-out;
`


export const ButtonBack = styled.div`
  position: absolute;
  top: 0;
  display: block;
  width: 225px;
  height: 225px;
  background-size: cover;
  background-repeat: no-repeat;
`

export const ButtonShade = styled.p`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .4s ease-in-out;
  background-color: rgba(0,0,0,.5);
  &:hover {
    background-color: rgba(0,0,0,.25);
  }
`

export const ButtonText = styled.span`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${key('colors.white')};
  font-size: ${key(['fontSizes', 5])}px;
  font-weight: ${key('fontWeights.medium')};
  transition: all .4s ease-in-out;
`

export const InputMorph = styled.input`
  padding: ${key(['space', 2])}px ${key(['space', 5])}px;
  font-size: ${key(['fontSizes', 3])}px;
  line-height: ${key(['lineHeights', 3])};
  font-weight: ${key('fontWeights.medium')};
  background-color: ${props => props.button ? key('colors.bright.blue') : key('colors.white')};
  color: ${props => props.button ? key('colors.white') : key('colors.black')};
  border: 5px solid ${key('colors.bright.blue')};
  border-radius: ${props => props.button ? '2px' : '50px'};
  outline: none !important;
  transition: all .6s ease-in-out;
  cursor: ${props => props.button ? 'pointer' : 'default'};
  &::placeholder {
    color: ${key(['colors', 'gray', 1])};
  }
`

export const SubmitButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid ${key('colors.bright.blue')};
  background-color: ${key('colors.bright.blue')};
  background-image: url(${ArrowIconWhite});
  background-position: center;
  background-repeat: no-repeat;
  outline: none !important;
  cursor: pointer;
  visibility: ${props => props.submit ? 'visible' : 'hidden'};
`