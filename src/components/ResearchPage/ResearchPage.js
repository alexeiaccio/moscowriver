import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import propPath from 'crocks/Maybe/propPath'
import Maybe from 'crocks/Maybe'
import map from 'crocks/pointfree/map'
import reduce from 'crocks/pointfree/reduce'
import assoc from 'crocks/helpers/assoc'
import assign from 'crocks/helpers/assign'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import {
  Section,
  H2,
  Row,
  Column,
} from 'Styled'
import { 
  Navigation,
  RoundButtonWithImage,
} from 'Components'
import {
  findSection,
  getStringFromProps,
  getElementsFromProps,
  getParagraphsFromProps,
  s4,
} from 'Helpers'

import { default as Header } from './ResearchHeader'
import { default as Cite } from './ResearchCite'
import { default as Description } from './ResearchDescription'

const SectionOne = Section.extend`
  justify-content:  space-between;
  align-items: center;
  height: calc(100vh - 120px);
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzSURBVHgBpYxRDgAgCEKfq4N1s/Lkpc0P/dYNYcAQ4FBv+xPDNWgyvx4RurFSgRms/akHyzsJj/3feW8AAAAASUVORK5CYII=) repeat, ${({image}) => 'url(' + image + ')'} no-repeat ${key('colors.black')};
  background-size: 6px 6px, auto 105vh;
`

const SectionRow = Row.extend`
  flex-wrap: wrap;
  justify-content: center;
`

const SectionContext = Section.extend`
  padding: ${key(['space', 12])}px 0 ${key(['space', 14])}px;
`

const SectionHeader = H2.extend`
  margin: 0 ${key(['space', 5])}px;
  margin-bottom: ${key(['space', 9])}px;
`

const SectionColumn =  Column.extend`
  color: ${key('colors.text')};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  max-width: 45%;
  &:last-of-type {
    margin-top: ${key(['space', 11])}px;
    max-width: 600px;
    font-weight: ${key('fontWeights.medium')};
    & a {
      color: ${key('colors.text')};
      text-decoration: none;
    }
  }
  &:last-child > a {
    bottom: ${key(['space', 13])}px;
    top: auto;
  }
`

export default ({data}) => {
  const sort = (order, xs) =>
    order.reduce((acc, x) => acc.concat([...xs[x]]), [])
    
  const sections = findSection(data)
  const head = propPath([0])
  const second = propPath([1])
  const uid = propPath(['node', 'uid'])
  const url = propPath(['spans', 0, 'data', 'url'])
  const body = propPath(['node', 'data', 'body'])
  const items = propPath(['items'])
  const title = propPath(['primary', 'title'])
  const header = propPath(['primary', 'header'])
  const text = propPath([0, 'text'])
  const cite = propPath(['primary', 'cite'])
  const description = propPath(['primary', 'description'])
  const image = propPath(['image', 'url'])

  const pageTitle = sections('research').chain(body).chain(head).chain(title).option([])
  const pageCite = sections('research').chain(body).chain(head).chain(cite).option([])
  const pageDescription = sections('research').chain(body).chain(head).chain(description).option([])
  const pageBackImg = sections('research').chain(body).chain(second).chain(items).chain(head).chain(image).option([])
  const pageAnchors = data.map(edge => assoc('uid', uid(edge).option({}))({}))
  const pageHeaders = data.map(edge => body(edge).chain(head).chain(header).chain(head).option({}))
  const pageNav = pageHeaders.map((header, i) => assign(header, pageAnchors[i])).filter(x => x.text)
  const sectionsId = x => sections(x).chain(uid).option('')
  
  const contextHeader = sections('context').chain(body).chain(head).chain(header).option([])
  const contextParagraphs = sections('context').chain(body).chain(head).chain(items).option([])
  const contextUrl = text => head(text).chain(url).option('/')
    
  console.log(
    sectionsId('context')
  )

  return (
    <Fragment>
      <Header data={{title: pageTitle}} />
      <main>
        <SectionOne image={pageBackImg} >
          <Cite color='blue' fontSize={1} data={{cite: pageCite}} />
          <Description data={{ description: getParagraphsFromProps(pageDescription) }} />
          <Navigation data={ sort([4, 5, 3, 1, 2, 7, 6, 0], pageNav) } />
        </SectionOne>
        <SectionContext id={sectionsId('context')} >
          <Row>
            <SectionHeader color='bright.blue' >{ getStringFromProps(contextHeader) }</SectionHeader>
          </Row>
          <SectionRow>
            {contextParagraphs.map(paragraph =>
              paragraph.image.url === null 
              ? <SectionColumn key={s4()}>
                { getParagraphsFromProps(paragraph.text) }
                </SectionColumn>
              : <SectionColumn key={s4()}>
                  <a href={contextUrl(paragraph.text)} target='_blank'>
                  { getParagraphsFromProps(paragraph.text) }
                  </a>
                  <RoundButtonWithImage to={contextUrl(paragraph.text)} url={paragraph.image.url} text={getStringFromProps(paragraph.textimage)} />
                </SectionColumn>
            )}            
          </SectionRow>
        </SectionContext>
        <div>
        { JSON.stringify(data) }
        </div>
      </main>
    </Fragment>
  )
}