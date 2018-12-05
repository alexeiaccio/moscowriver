import styled from 'styled-components'
import { key } from 'styled-theme'

import {
  H2,
  Row,
} from './StyledTitle'
import {
  Section
} from './StyledSections'

import Holder from '../../assets/Holder.svg'

export const ResultSection = Section.extend`
  padding: ${key(['space', 5])}px 0;
`

export const SectionRowCentered = Row.extend`
  flex-wrap: wrap;
  width: 510px;
`

export const SectionRowCenteredWide = Row.extend`
  flex-wrap: wrap;
  width: 720px;
`

export const SectionHeader = H2.extend`
  position: relative;
  margin-bottom: ${key(['space', 9])}px;
  line-height: ${key(['lineHeights', 2])};
`

export const SectionImage = styled.div`
  background: url(${({url}) => url}) center no-repeat, 
    url(${Holder}) center no-repeat ${key(['colors', 'gray', 3])};
  background-size: cover, 50px 50px;  
  position: relative;
`

export const ImageCopyright = styled.span`
  position: absolute;
  display: inline-block;
  bottom: -${key(['space', 6])}px;
  right: 0;
  font-size: ${key(['fontSizes', 7])}px;
  color: ${key(['colors', 'gray', 1])};
`

export const SectionBlock = styled.div`
  position: relative;
  color: ${key('colors.text')};
  padding-bottom: ${key(['space', 9])}px;
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  width: 100%;
  & h3 {
    color: ${key('colors.pink')};
    font-size: ${key(['fontSizes', 2])}px;
    line-height: ${key(['lineHeights', 2])};
    margin-top: ${key(['space', 9])}px;
    margin-bottom: ${key(['space', 5])}px;
  }
  & h4 {
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 3])}px;
    line-height: ${key(['lineHeights', 2])};
  }
`

export const SubHeader = styled.div`
  font-family: ${key('fonts.base')};
  color: ${key('colors.pink')};
  font-size: ${key(['fontSizes', 5])}px;
  font-weight: ${key('fontWeights.medium')};
  padding-bottom: ${key(['space', 2])}px;
`