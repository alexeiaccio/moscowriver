import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import { RichText } from 'prismic-reactjs'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import { Lazy } from 'Components'
import {
  Section,
  SectionRowCenteredWide,
  SectionHeader,
  SectionBlock,
} from 'Styled'
import { linkResolver, s4 } from 'Helpers'
import patternWaves from '../../assets/PatternWavesWhite.svg'

const ColoredBackSection = Section.extend`
  margin: ${key(['space', 9])}px 0 ${key(['space', 10])}px;
  padding: ${key(['space', 10])}px 0;
  background-color: ${key('colors.pink')};
  background-image: url(${patternWaves});
  background-repeat: repeat-x;
  background-position-y: calc(100% + 225px);
`

const TextBlock = SectionBlock.extend`
  flex-direction: column;
  color: ${key('colors.white')};
  font-weight: ${key('fontWeights.medium')};
  & h3, h4 {
    color: ${key('colors.white')};
    font-family: ${key('fonts.base')};
    font-size: ${key(['fontSizes', 2])}px;
    line-height: ${key(['lineHeights', 1])};
  }
`

export const ResultColoredBack = ({ section }) => {
  const { primary, items } = section
  const header = propPath(['primary', 'header'])
  const head = propPath([0])
  const text = propPath(['text'])
  const getHeader = header(section).chain(head).chain(text).option('')

  return (
    <ColoredBackSection id={primary.anchor || null} >
      {getHeader.length > 0 &&
        <SectionRowCenteredWide>
          <Lazy height={50}>
            <SectionHeader color='text' shade='white' >
            { RichText.asText(primary.header) }
            </SectionHeader>
          </Lazy>
        </SectionRowCenteredWide>
      }
      <SectionRowCenteredWide style={{textAlign: 'center'}} >
        {items.map(item =>
          <Lazy key={s4()} height={300}>
            <TextBlock key={s4()} >
            { RichText.render(item.text, linkResolver) }
            </TextBlock>
          </Lazy>
        )}
      </SectionRowCenteredWide>
    </ColoredBackSection>
  )
}