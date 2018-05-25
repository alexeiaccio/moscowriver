import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
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
  &.odd div,
  &.even div {
    max-width: 45%;
  }
  &.odd .sectionimage {
    width:  450px;
    height: 320px;
  }
  &.even .sectionimage.jumbo,
  &.odd .sectionimage.jumbo {
    width: 150%;
    max-width: 1340px;
    height: 900px;
  }
  &.even .sectionimage {
    order: -1;
    width: 100%;
    max-width: 650px;
    height: 600px;
    @media (max-width: 1199px) {
      order: 1;
      margin-top: ${key(['space', 5])}px;
    }
  }
  @media (min-width: 1210px) {
    &.odd .sectionimage {
      margin-right: -50px;
    }
    &.even .sectionimage {
      margin-left: -150px;
    }
    &.even .sectionimage.jumbo,
    &.odd .sectionimage.jumbo {
      margin-right: -150px;
      margin-left: -150px;
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

export const ResultImageJumbo = ({ section }) => {
  const { primary, items } = section
  const header = propPath(['primary', 'header'])
  const head = propPath([0])
  const text = propPath(['text'])
  const getHeader = header(section).chain(head).chain(text).option('')

  return (
    <ResultSection id={primary.anchor || null} >
    {getHeader.length > 0 &&
      <Lazy height={50}>
        <Row>
          <SectionHeader color='text' shade='pink' >
          { RichText.asText(primary.header) }
          </SectionHeader>
        </Row>
      </Lazy>
    }
    {items.map((item, i) =>
      <Lazy key={s4()} height={600}>
        <Fragment>
          {item.sectionimage.url
          ? <SectionImageBlock className={isOdd(i) ? 'odd' : 'even'} key={s4()}>
            <Fragment key={s4()}>
                { RichText.render(item.text, linkResolver, htmlSerializer) }
                <SectionImage
                  key={s4()}
                  className={
                    item.text.filter(x => x.text && x.text.length > 0).length > 0
                      ? 'sectionimage' : 'sectionimage jumbo'
                  }
                  url={item.sectionimage.url}
                />
              </Fragment>
          </SectionImageBlock>
          : <SectionImageBlock key={s4()} >
            { RichText.render(item.text, linkResolver, htmlSerializer) }
            </SectionImageBlock>
          }
        </Fragment>
      </Lazy>
    )}
    </ResultSection>
  )
}