import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import { Lazy } from 'Components'
import {
  ResultSection,
  SectionRowCenteredWide,
  SectionHeader,
  SectionBlock,
} from 'Styled'
import { linkResolver, s4 } from 'Helpers'

const TextSection = ResultSection.extend`
  padding-bottom: ${key(['space', 12])}px;
`

const TextBlock = SectionBlock.extend`
  font-weight: ${key('fontWeights.medium')};
  &:last-of-type {
    padding: ${key(['space', 7])}px;
    font-weight: ${key('fontWeights.semibold')};
    border: 10px solid ${key('colors.pink')};
  }
`

export const ResultText = ({ section }) => {
  const { primary, items } = section

  return (
    <TextSection id={primary.anchor || null} >
      <SectionRowCenteredWide>
        <Lazy height={50}>
          <SectionHeader color='text' shade='pink' >
          { RichText.asText(primary.header) }
          </SectionHeader>
        </Lazy>
        {items.map(item =>
          <Lazy key={s4()} height={600}>
            <TextBlock key={s4()} >
            { RichText.render(item.text, linkResolver) }
            </TextBlock>
          </Lazy>
        )}
      </SectionRowCenteredWide>
    </TextSection>
  )
}