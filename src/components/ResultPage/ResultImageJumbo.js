import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import { RichText } from 'prismic-reactjs'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

const Elements = RichText.Elements

import { Lazy, Definition } from 'Components'
import {
  Row,
  ResultSection,
  SectionHeaderThree,
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
  & h3:first-of-type {
    margin-top: 0px;
  }
  & h4 {
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 3])}px;
    line-height: ${key(['lineHeights', 2])};
  }
  &.odd div,
  &.even div {
    max-width: 45%;
    flex: 45%;
  }
  &.even div {
    @media (max-width: 1199px) {
      max-width: 60%;
      flex: 60%;
    }
  }
  &.odd:first-of-type .sectionimage {
    width:  450px;
    height: 320px;
    flex: 450px;
    max-width: 450px;
  }
  &.even .sectionimage.jumbo,
  &.odd .sectionimage.jumbo {
    width: 150%;
    max-width: 1340px;
    height: 900px;
  }
  &.even .sectionimage ,
  &.odd .sectionimage {
    width: 100%;
    max-width: 650px;
    height: 600px;
    @media (max-width: 1199px) {
      margin-top: ${key(['space', 5])}px;
    }
  }
  &.even .sectionimage {
    order: -1;
    @media (max-width: 1199px) {
      order: 1;
    }
  }
  @media (min-width: 1210px) {
    &.odd:first-of-type .sectionimage {
      margin-right: -50px;
    }    
    &.odd .sectionimage {
      margin-right: -125px;
    }
    &.even .sectionimage {
      margin-left: -125px;
    }
    &.even .sectionimage.jumbo,
    &.odd .sectionimage.jumbo {
      margin-right: -125px;
      margin-left: -125px;
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

export const ResultImageJumbo = ({ section, definitions }) => {
  const { primary, items } = section
  const header = propPath(['primary', 'header'])
  const head = propPath([0])
  const text = propPath(['text'])
  const getHeader = header(section).chain(head).chain(text).option('')
  
  const linkResolverDefinition = doc => doc.uid

  const propsWithUniqueKey = function(props, key) {
    return Object.assign(props || {}, { key })
  }

  const htmlSerializerDefinition = function(type, element, content, children, key) {
    let props = {}
    
    switch(type) {
      case Elements.hyperlink:
        props = {
          definitions: definitions.filter(def => def.node.uid === element.data.uid)
        }
        return React.createElement(Definition, propsWithUniqueKey(props, key), children)
      default:
        return null
    }
  }

  return (
    <ResultSection id={primary.anchor || null} >
    {getHeader.length > 0 &&
      <Lazy height={50}>
        <Row>
          <SectionHeaderThree>
          { RichText.asText(primary.header) }
          </SectionHeaderThree>
        </Row>
      </Lazy>
    }
    {items.map((item, i) =>
      <Lazy key={s4()} height={600}>
        <Fragment>
          {item.sectionimage.url
          ? <SectionImageBlock className={isOdd(i) ? 'odd' : 'even'} key={s4()}>
              <Fragment key={s4()}>
                {item.text.length > 0 && item.text[0].text.length > 0 && 
                  RichText.render(item.text, linkResolverDefinition, htmlSerializerDefinition) 
                 }
                <SectionImage
                  key={s4()}
                  className={
                    item.text.filter(x => x.text && x.text.length > 0).length > 0
                      ? 'sectionimage' : 'sectionimage jumbo'
                  }
                  url={item.sectionimage.url}
                  style={{ height: item.sectionimage.dimensions.height }}
                />
              </Fragment>
          </SectionImageBlock>
          : <SectionImageBlock key={s4()} >
            { RichText.render(item.text, linkResolverDefinition, htmlSerializerDefinition) }
            </SectionImageBlock>
          }
        </Fragment>
      </Lazy>
    )}
    </ResultSection>
  )
}