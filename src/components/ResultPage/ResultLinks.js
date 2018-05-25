import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import { RichText } from 'prismic-reactjs'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import {
  Lazy, RoundButtonWithImage, Link,
  RoundButtonTop,
} from 'Components'
import {
  Section, Row, ResultSection,
  SectionRowCenteredWide, SectionHeader,
  Column,
} from 'Styled'
import { getElementsFromProps, s4 } from 'Helpers'

const LinkSection = Section.extend`
  padding: ${key(['space', 5])}px 0 ${key(['space', 14])}px;
  position: relative;
`

const SectionRow = Row.extend`
  margin-top: ${key(['space', 10])}px;
  width: 990px;
`

const SectionColumn =  Column.extend`
  color: ${key('colors.text')};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  max-width: 45%;
  & h3, h4 {
    margin-top: ${key(['space', 9])}px;
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 2])}px;
    line-height: ${key(['lineHeights', 2])};
    color: ${key('colors.pink')};
  }
  & a {
    top: ${key(['space', 12])}px;
    color: ${key('colors.text')};
    text-decoration: none;
  }
  &:last-of-type {
    text-align: right;
  }
`

export const ResultLinks = ({ section }) => {
  const { primary, items } = section
  const header = propPath(['primary', 'header'])
  const getHeader = header(section).option([{text: ''}])

  return (
    <Lazy height={600}>
      <LinkSection id={primary.anchor || null} >
        {getHeader[0].text.length &&
          <SectionRow>
            <SectionHeader color='text' shade='pink' >
            { RichText.asText(primary.header) }
            </SectionHeader>
          </SectionRow>
        }
        <Row>
        {items.map(item =>
          item.sectionimage.url &&
            <SectionColumn key={s4()}>
              <Link key={s4()} to={`/${item.text[1].spans[0].data.uid}`}>
              { getElementsFromProps(item.text) }
              </Link>
              <RoundButtonWithImage key={s4()} to={`/${item.text[1].spans[0].data.uid}`} url={item.sectionimage.url} text='' />
            </SectionColumn>
        )}
        </Row>
        <RoundButtonTop to='#header' color={'colors.white'} />
      </LinkSection>
    </Lazy>
  )
}