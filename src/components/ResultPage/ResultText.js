import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import { RichText } from 'prismic-reactjs'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import { Lazy } from 'Components'
import {
  ResultSection,
  SectionRowCenteredWide,
  Row,
  SectionHeader,
  SubHeader,
  SectionBlock,
} from 'Styled'
import { linkResolver, s4 } from 'Helpers'

const TextSection = ResultSection.extend`
  padding-bottom: ${key(['space', 12])}px;
`

const HeaderRow = Row.extend`
  width: 720px;
`

const TextBlock = SectionBlock.extend`
  flex-direction: column;
  font-weight: ${key('fontWeights.medium')};
  &:last-of-type {
    padding: ${key(['space', 7])}px;
    font-weight: ${key('fontWeights.semibold')};
    border: 10px solid ${key('colors.pink')};
  }
`

export const ResultText = ({ section }) => {
  const { primary, items } = section
  const header = propPath(['primary', 'header'])
  const head = propPath([0])
  const text = propPath(['text'])
  const getHeader = header(section).chain(head).chain(text).option('')

  return (
    <TextSection id={primary.anchor || null} >
      {getHeader.length > 0 &&
      <HeaderRow>
        <div>
          <SubHeader>{primary.sectionname}</SubHeader>
          <SectionHeader color='text' shade='pink'>
          { RichText.asText(primary.header) }
          </SectionHeader>
        </div>
      </HeaderRow>
      }
      <SectionRowCenteredWide>
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