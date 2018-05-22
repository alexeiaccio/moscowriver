import styled from 'styled-components'
import { key } from 'styled-theme'
import patternWaves from '../../assets/PatternWaves.svg'
import AccioWhite from '../../assets/AccioWhite.svg'
import AccioLogo from '../../assets/Accio.svg'

export const StyledFooter = styled.footer`
  padding: ${key(['space', 7])}px;
  height: 170px;
  background-color: ${key('colors.violet')};
  background-image: url(${patternWaves});
  background-repeat: repeat;
  background-position: center;
`

export const Email = styled.div`
  text-align: center;
  font-size: ${key(['fontSizes', 5])}px;
  font-weight: ${key('fontWeights.semibold')};
  color: ${key('colors.text')};
  &> a {
    font-size: ${key(['fontSizes', 3])}px;
    font-weight: ${key('fontWeights.light')};
    color: ${key('colors.white')};
    text-decoration: none;
    &:hover {
      color: ${key('colors.bright.blue')};
    }
  }
`

export const Logo = styled.a`
  display: inline-block;
  height: 35px;
  width: 200px;
  margin-top: ${key(['space', 9])}px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

export const Copyright = styled.div`
  margin-top: ${key(['space', 7])}px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: ${({color}) => key('colors.' + color)};
  font-size: ${key(['fontSizes', 6])}px;
`

export const Accio = styled.a`
  display: inline-block;
  height: 35px;
  width: 115px;
  background-image: url(${({color}) => color === 'white' ? AccioWhite : AccioLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`