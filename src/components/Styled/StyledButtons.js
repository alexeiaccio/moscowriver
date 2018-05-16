import styled from 'styled-components'
import { key } from 'styled-theme'
import Link from '../Link/Link'
import ArrowIconWhite from '../../assets/ArrowIconWhite.svg'

const RoundTemplate = styled(Link)`
  position: absolute;
  top: 0;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  text-decoration: none;
  transition: all .4s ease-in-out;
`

export const RoundButton = RoundTemplate.extend`
  width: 225px;
  height: 225px;
  &:hover > p {
    background-color: rgba(0,0,0,.15);
  }
`

export const RoundButtonSmall = RoundTemplate.extend`
  width: 100px;
  height: 100px;
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
  min-width: ${props => props.button ? '200px' : '400px'};
  padding: ${key(['space', 2])}px ${key(['space', 5])}px;
  font-size: ${key(['fontSizes', 3])}px;
  line-height: ${key(['lineHeights', 3])};
  font-weight: ${key('fontWeights.medium')};
  background-color: ${key('colors.white')};
  background-color: ${({button}) => button && key('colors.bright.blue')};
  background-color: ${({success}) => success && key('colors.bright.green')};
  text-align: ${({success}) => success && 'center'};
  color: ${key('colors.black')};
  color: ${({button}) => button && key('colors.white')};
  color: ${({success}) => success && key('colors.white')};
  border: 5px solid ${({success}) => success ? key('colors.bright.green') : key('colors.bright.blue')};
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
  border-radius: 20px;
  border: 5px solid ${key('colors.bright.blue')};
  background-color: ${key('colors.bright.blue')};
  background-image: url(${ArrowIconWhite});
  background-position: 5px center;
  background-repeat: no-repeat;
  outline: none !important;
  cursor: pointer;
  visibility: ${props => props.submit ? 'visible' : 'hidden'};
  transition: all .4s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 15px;
    font-size: ${key(['fontSizes', 5])}px;
    font-weight: ${key('fontWeights.semibold')};
    line-height: 40px;
    color: ${key('colors.white')};
    transition: all .4s ease-in-out .2s;
    opacity: 0;
  }
  &:hover {
    width: 150px;
    background-position: 115px center;
    &::after {
      content: 'Отправить';
      opacity: 1;
    }
  }
`