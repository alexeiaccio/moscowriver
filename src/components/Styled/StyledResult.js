import styled from 'styled-components'
import { key } from 'styled-theme'

import {
  H2,
  Row,
} from './StyledTitle'
import {
  Section,
  Column,
} from './StyledSections'

import IconEye from '../../assets/IconEye.svg'

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
  margin-bottom: ${key(['space', 9])}px;
  line-height: ${key(['lineHeights', 2])};
`

export const SectionImage = styled.div`
  background: url(${({url}) => url}) center no-repeat, 
    url(${IconEye}) center no-repeat ${key(['colors', 'gray', 3])};
  background-size: cover, 42px 27px;
`

export const SectionBlock = styled.div`
  position: relative;
  color: ${key('colors.text')};
  padding-bottom: ${key(['space', 10])}px;
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  width: 100%;
  & h3 {
    color: ${key('colors.pink')};
    font-size: ${key(['fontSizes', 1])}px;
    line-height: ${key(['lineHeights', 1])};
    padding-bottom: ${key(['space', 3])}px;
  }
  & h4 {
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 2])}px;
    line-height: ${key(['lineHeights', 2])};
  }
`