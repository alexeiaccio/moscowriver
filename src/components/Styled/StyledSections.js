import styled from 'styled-components'
import { key } from 'styled-theme'
import patternWaves from '../../assets/PatternWaves.svg'

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
  background-color: ${key('colors.purple')};
`