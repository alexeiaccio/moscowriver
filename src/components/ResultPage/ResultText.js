import React from 'react'
import propPath from 'crocks/Maybe/propPath'
import { RichText } from 'prismic-reactjs'
import { key } from 'styled-theme'

import { Lazy } from 'Components'
import {
  ResultSection,
  SectionRowCenteredWide,
  Row,
  SectionHeaderThree,
  SectionBlock,
} from 'Styled'
import { linkResolver, s4 } from 'Helpers'

const TextSection = ResultSection.extend`
  padding-bottom: ${key(['space', 12])}px;
`

const HeaderRow = Row.extend`
  width: 720px;
  & h3 {
    margin-bottom: ${key(['space', 5])}px;
    font-weight: ${key('fontWeights.medium')};
  }
`

const TextBlock = SectionBlock.extend`
  flex-direction: column;
  font-weight: ${key('fontWeights.medium')};
  & p:not(:last-of-type) {
    margin-bottom: ${key(['space', 3])}px;
  }
  &:last-of-type {
    padding: ${key(['space', 5])}px;
    font-weight: ${key('fontWeights.medium')};
    border: 5px solid ${key('colors.pink')};
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
        <SectionHeaderThree color='text' shade='pink'>
        { RichText.asText(primary.header) }
        </SectionHeaderThree>
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