import styled from 'styled-components'
import { key } from 'styled-theme'
import patternWaves from '../../assets/PatternWaves.svg'

export const StyledFooter = styled.footer`
  padding: ${key(['space', 9])}px;
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

export const Logo = styled.img`
  height: 42px;
  width: auto;
  padding-top: ${key(['space', 9])}px;
`