import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import { Lazy } from 'Components'
import {
  Row,
  ResultSection,
  SectionHeader,
  SectionImage,
  SectionBlock,
} from 'Styled'
import { linkResolver, s4, isOdd, htmlSerializer } from 'Helpers'

const SectionImageBlock = SectionBlock.extend`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: ${key('sizes.width')};
  &.header {
    padding-bottom: ${key(['space', 7])}px;
  }
  &.odd div,
  &.even div {
    width: 45%;
  }
  &.text div {
    max-width: 720px;
  }
  & .sectionimage {
    width:  450px;
    height: 275px;
    &.margin-top {
      margin-top: ${key(['space', 9])}px;
    }
  }
  &.even .sectionimage {
    order: -1;
  }
  @media (min-width: 1210px) {
    &.odd .sectionimage {
      margin-right: -50px;
    }
    &.even .sectionimage {
      margin-left: -50px;
    }
  }
  & p {
    padding-bottom: ${key(['space', 2])}px;
  }
  & li {
    padding-bottom: ${key(['space', 2])}px;
    padding-left: ${key(['space', 4])}px;
    text-indent: -${key(['space', 4])}px;
    &::before {
      content: '— ';
    }
  }
`

export const ResultImage = ({ section }) => {
  const { primary, items } = section

  return (
    <ResultSection id={primary.anchor || null} >
    {primary.header[0].text.length &&
      <Lazy height={50}>
        <Row>
          <SectionHeader color='text' shade='pink' >
          { RichText.asText(primary.header) }
          </SectionHeader>
        </Row>
      </Lazy>
    }
    {items.map((item, i) =>
      <Lazy key={s4()} height={300}>
      {item.sectionimage.url
      ? <SectionImageBlock className={isOdd(i) ? 'odd' : 'even'} key={s4()}>
        <Fragment key={s4()}>
            { RichText.render(item.text, linkResolver, htmlSerializer) }
            <SectionImage
              key={s4()}
              className={
                item.text.filter(x => x.type.includes('heading')).length
                  ? 'sectionimage margin-top' : 'sectionimage'
              }
              url={item.sectionimage.url}
            />
          </Fragment>
      </SectionImageBlock>
      : <SectionImageBlock
          className={item.text.map(x => x.type).indexOf('paragraph') >= 0 ? 'text' : 'header' }
          key={s4()}
        >
        { RichText.render(item.text, linkResolver, htmlSerializer) }
        </SectionImageBlock>
      }
      </Lazy>
    )}
    </ResultSection>
  )
}