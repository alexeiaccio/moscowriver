import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import { RichText } from 'prismic-reactjs'
import { key } from 'styled-theme'

import { Lazy } from 'Components'
import {
  Row,
  ResultSection,
  SectionHeader,
  SectionImage,
  ImageCopyright,
  SectionBlock,
  SubHeader,
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
    width: 48%;
  }
  &.text div {
    max-width: 720px;
  }
  & .sectionimage {
    width:  450px;
    height: 275px;
    margin-top: ${key(['space', 2])}px;
  }
  &.even .sectionimage {
    order: -1;
  }
  @media (min-width: 1210px) {
    &.odd div,
    &.even div {
      width: 50%;
    }
    &.odd .sectionimage {
      margin-right: -50px;
    }
    &.even .sectionimage {
      margin-left: -50px;
    }
  }
  & p {
    padding-bottom: ${key(['space', 5])}px;
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
  const header = propPath(['primary', 'header'])
  const head = propPath([0])
  const text = propPath(['text'])
  const getHeader = header(section).chain(head).chain(text).option('')

  return (
    <ResultSection id={primary.anchor || null} >
    {getHeader.length > 0 &&
      <Row>
        <div>
          <SubHeader>{primary.sectionname}</SubHeader>
          <SectionHeader color='text' shade='pink' >
          { RichText.asText(primary.header) }
          </SectionHeader>
        </div>
      </Row>
    }
    {items.map((item, i) =>
      <Lazy key={s4()} height={300}>
      {item.sectionimage.url
      ? <SectionImageBlock className={isOdd(i) ? 'odd' : 'even'} key={s4()}>
        <Fragment key={s4()}>
            { RichText.render(item.text, linkResolver, htmlSerializer) }
            <SectionImage
              key={s4()}
              className="sectionimage"
              url={item.sectionimage.url}
            >
            { item.caption && 
              <ImageCopyright>
              { item.caption }
              </ImageCopyright>
            }
            { !item.caption && item.sectionimage.copyright && 
              <ImageCopyright>
              { item.sectionimage.copyright }
              </ImageCopyright>
            }
            </SectionImage>
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