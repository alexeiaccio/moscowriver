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
import patternWaves from '../../assets/PatternWavesWhite.svg'
import IconEye from '../../assets/IconEye.svg'
import SmallWave from '../../assets/SmallWave.svg'
import Timeline from '../../assets/Timeline.svg'

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
  width: 1070px;
`

const SectionRiverRow = Row.extend`
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 1070px;
`

const SectionTimelineRow = Row.extend`
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 1070px;
`

const SectionNextRow = Row.extend`
  flex-wrap: wrap;
  width: 720px;
`

const SectionOrchestraRow = Row.extend`
  flex-wrap: wrap;
`

const SectionContext = Section.extend`
  padding: ${key(['space', 12])}px 0 ${key(['space', 14])}px;
`

const SectionHeader = H2.extend`
  margin: 0 0 ${key(['space', 9])}px ${key(['space', 3])}px;
`

const SectionOrchestraHeader = H2.extend`
  margin: 0 0 ${key(['space', 9])}px ${key(['space', 5])}px;
  &::before {
    content: '';
    position: absolute;
    display: inline-flex;
    width: 100vw;
    left: -101vw;
    bottom: calc(${key(['fontSizes', 1])}px * .18);
    height: calc(${key(['fontSizes', 1])}px * .45);
    background-color: ${key('colors.text')};
    z-index: -1;
  }
  &::after {
    width: 100vw;
    right: -101vw;
    background-color: ${key('colors.text')};
  }
`

const SectionOrchestraColumn =  Column.extend`
  color: ${key('colors.text')};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  & p {
    float: left;
    max-width: 65%;
  }
  & .img {
    width:  186px;
    height: 43px;
    float: right;
  }
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

const SectionProjectColumn =  Column.extend`
  padding: 0 ${key(['space', 3])}px 0;
  color: ${key('colors.text')};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  & a {
    color: ${key('colors.text')};
    text-decoration: none;
  }
  & p:nth-of-type(2) {
    margin-top: ${key(['space', 9])}px;
    font-weight: ${key('fontWeights.semibold')};
  }
  &:last-child > a {
    bottom: ${key(['space', 11])}px;
    top: auto;
    & span {
      transform: rotateZ(-90deg) translateY(20px);
    }
    &:hover > span {
      transform: rotateZ(0) translate(20px, 0px);
    }
  }
`

const SectionNextColumn =  Column.extend`
  color: ${key('colors.white')};
  padding: 0 ${key(['space', 3])}px 0;
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  & p {
    margin-bottom: ${key(['space', 9])}px;
  }
`

const SectionRiverColumn =  Column.extend`
  color: ${key('colors.white')};
  padding-bottom: ${key(['space', 5])}px;
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  max-width: 45%;
  & h3 { 
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 3])}px;
    line-height: ${key(['lineHeights', 3])};
  }
  & h4 { 
    margin-bottom: ${key(['space', 5])}px;
    padding-bottom: ${key(['space', 1])}px;
    font-size: ${key(['fontSizes', 4])}px;
    line-height: ${key(['lineHeights', 4])};
    border-bottom: 1px solid ${key('colors.white')};
  }
  & p {
    margin-bottom: ${key(['space', 5])}px;
  }
  &:nth-of-type(2) span {
    display: inline-block;
    padding-left: ${key(['space', 4])}px;
    text-indent: -${key(['space', 4])}px;
    &::before {
      content: '— ';
    }
  }
  &:nth-of-type(4) {
    padding-top: ${key(['space', 8])}px;
  }
  &:nth-last-of-type(2) {
    margin: 0 0 ${key(['space', 5])}px 0;
    max-width: 720px;
    font-weight: ${key('fontWeights.medium')};
    & a {
      color: ${key('colors.text')};
      text-decoration: none;
    }
  }
  &:last-child {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    & span {
      display: flex;
      max-width: 30%;
      padding: 0 ${key(['space', 3])}px 0 ${key(['space', 10])}px;
      background:  url(${IconEye}) 10px 10px no-repeat;
    }
  }
`

const Image = styled.div`
  background: ${({url}) => 'url(' + url + ') center no-repeat'};
  background-size:  cover;
`

const SectionGeoColumn =  Column.extend`
  position: relative;
  color: ${key('colors.text')};
  padding-bottom: ${key(['space', 9])}px;
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  max-width: 100%;
  & h3 { 
    color: ${key('colors.blue')};
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 1])}px;
    line-height: ${key(['lineHeights', 1])};
  }
  & h4 { 
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 2])}px;
    line-height: ${key(['lineHeights', 2])};
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 15px;
      right: 0px;
      height: 10px;
      width: 75px;
      background: url(${SmallWave}) repeat-x;
      background-size: auto 8px;
      background-position: 0% 50%;
    }
  }
  & .img {
    width:  450px;
    height: 275px;
    top: ${key(['space', 9])}px;
  }
  &:first-of-type {
    max-width: 720px;
    padding-bottom: ${key(['space', 9])}px;
    font-weight: ${key('fontWeights.medium')};
  }
  &:nth-of-type(2n)  {
    & p {
      float: right;
      max-width: 45%;
    }
    & h4 {
      padding-left: 55%;
    }
    & .img {
      float: left;
    }
  }
  &:nth-of-type(2n+3) {
    & p {
      float: left;
      max-width: 45%;
    }
    & .img {
      float: right;
    }
  }
`

const SectionTimelineColumn =  Column.extend`
  position: relative;
  color: ${key('colors.text')};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  max-width: 100%;
  & h3, h4 { 
    color: ${key('colors.text')};
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 2])}px;
    line-height: ${key(['lineHeights', 2])};
  }
  &:nth-of-type(1) {
    &> * {
      max-width: 45%;
    }
    &> *:nth-child(1),
    &> *:nth-child(2) {
      text-align: right;
    }
    &> *:nth-child(3) {
      margin-top: 80px;
    }
    &> *:nth-child(3),
    &> *:nth-child(4) {
      padding-left: 65%;
    }
    &> *:nth-child(5) {
      margin-top: 105px;
    }
    &> *:nth-child(5),
    &> *:nth-child(6) {
      padding-left: 55%;
    }
  }
  &:nth-of-type(2) {
      margin-top: 50px;
    &> * {
      max-width: 35%;
    }
    &> *:nth-child(2) {
      margin-top: 145px;
    }
    &> *:nth-child(2),
    &> *:nth-child(3),
    &> *:nth-child(6),
    &> *:nth-child(7),
    &> *:nth-child(10),
    &> *:nth-child(11) {
      padding-left: 55%;
    }
    &> *:nth-child(4) {
      margin-top: 25px;
    }
    &> *:nth-child(6) {
      margin-top: -150px;
    }
    &> *:nth-child(8) {
      margin-top: -60px;
    }
    &> *:nth-child(10) {
      margin-top: -105px;
    }
  }
  &:nth-of-type(3) {
    max-width: 720px;
    & h3 {
      margin-top: 100px;
      margin-bottom:35px;
      position: relative;
      display: inline-flex;
      font-family: ${key('fonts.headers')};
      font-size: ${key(['fontSizes', 1])}px;
      font-weight: ${key('fontWeights.normal')};
      color: ${({color}) => key('colors.' + color)};
      z-index: 5;
      &::after {
        content: '';
        position: absolute;
        display: inline-flex;
        width: 100%;
        bottom: calc(${key(['fontSizes', 1])}px * .18);
        height: calc(${key(['fontSizes', 1])}px * .45);
        background-color: ${key('colors.bright.blue')};
        z-index: -1;
      }
    }
    & p {
      font-weight: ${key('fontWeights.medium')};
    }
  }
`

const SectionBlue = Section.extend`
  padding: ${key(['space', 10])}px 0 ${key(['space', 12])}px;
  background-color: ${key('colors.blue')};
  background-image: url(${patternWaves});
  background-repeat: repeat-x;
  background-position-y: calc(100% + 225px);
`

const SectionGeo = Section.extend`
  padding: ${key(['space', 10])}px 0;
`

const SectionTimeline = Section.extend`
  padding: 0 0 ${key(['space', 10])}px 0;
  background: url(${Timeline}) center 85px no-repeat; 
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
  const sectionsHeader = name => sections(name).chain(body).chain(head).chain(header).option([])
  
  const contextUrl = text => head(text).chain(url).option('/')
  const projectUrl = text => second(text).chain(url).option('/')
  const contextParagraphs = sections('context').chain(body).chain(head).chain(items).option([])
  const riverParagraphs = sections('river').chain(body).chain(head).chain(items).option([])
  const geoParagraphs = sections('geography').chain(body).chain(head).chain(items).option([])
  const timelineParagraphs = sections('timeline').chain(body).chain(head).chain(items).option([])
  const nextstepsParagraphs = sections('nextsteps').chain(body).chain(head).chain(items).option([])
  const projectmoscowParagraphs = sections('projectmoscow').chain(body).chain(head).chain(items).option([])
  const orchestraParagraphs = sections('orchestra').chain(body).chain(head).chain(items).option([])
    
  console.log(
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
            <SectionHeader color='text' shade='bright.blue' >{ getStringFromProps(sectionsHeader('context')) }</SectionHeader>
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
        <SectionBlue id={sectionsId('river')} >
          <Row>
            <SectionHeader color='text' shade='white' >
            { getStringFromProps(sectionsHeader('river')) }
            </SectionHeader>
          </Row>
          <SectionRiverRow>
            {riverParagraphs.map(paragraph => 
             <SectionRiverColumn key={s4()}>
              <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
             </SectionRiverColumn>
            )}
          </SectionRiverRow>
        </SectionBlue>
        <SectionGeo id={sectionsId('geography')}>
          <Row>
            <SectionHeader color='text' shade='bright.blue' >
            { getStringFromProps(sectionsHeader('geography')) }
            </SectionHeader>
          </Row>
          <SectionRow>
          {geoParagraphs.map(paragraph  => 
            <SectionGeoColumn key={s4()}>
              <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
              {(paragraph.image.url !== null) && 
                <Image className='img' url={paragraph.image.url} />
              }
            </SectionGeoColumn>
          )}
          </SectionRow>
        </SectionGeo>
        <SectionTimeline id={sectionsId('timeline')} >
          <SectionTimelineRow>
            <SectionHeader color='text' shade='bright.blue' >
            { getStringFromProps(sectionsHeader('timeline')) }
            </SectionHeader>
          </SectionTimelineRow>
          <SectionTimelineRow>
          {timelineParagraphs.map(paragraph => 
            <SectionTimelineColumn key={s4()}>
              <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
            </SectionTimelineColumn>
          )}
          </SectionTimelineRow>
        </SectionTimeline>
        <SectionBlue id={sectionsId('nextsteps')} >
          <SectionNextRow>
            <SectionHeader color='text' shade='white' >
            { getStringFromProps(sectionsHeader('nextsteps')) }
            </SectionHeader>
          </SectionNextRow>
          <SectionNextRow>
          {nextstepsParagraphs.map(paragraph => 
            <SectionNextColumn key={s4()}>
              <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
            </SectionNextColumn>
          )}
          </SectionNextRow>
        </SectionBlue>
        <SectionContext id={sectionsId('projectmoscow')} >
          <SectionNextRow>
            <SectionHeader color='text' shade='bright.blue' >{ getStringFromProps(sectionsHeader('projectmoscow')) }</SectionHeader>
          </SectionNextRow>
          <SectionNextRow>
            {projectmoscowParagraphs.map(paragraph =>
              paragraph.image.url === null 
              ? <SectionProjectColumn key={s4()}>
                { getParagraphsFromProps(paragraph.text) }
                </SectionProjectColumn>
              : <SectionProjectColumn key={s4()}>
                  <a href={projectUrl(paragraph.text)} target='_blank'>
                  { getParagraphsFromProps(paragraph.text) }
                  </a>
                  <RoundButtonWithImage to={projectUrl(paragraph.text)} url={paragraph.image.url} text={getStringFromProps(paragraph.textimage)} />
                </SectionProjectColumn>
            )}            
          </SectionNextRow>
        </SectionContext>
        <SectionGeo id={sectionsId('orchestra')}>
          <SectionOrchestraRow>
            <SectionOrchestraHeader color='text' shade='bright.blue' >
            { getStringFromProps(sectionsHeader('orchestra')) }
            </SectionOrchestraHeader>
          </SectionOrchestraRow>
          <SectionOrchestraRow>
          {orchestraParagraphs.map(paragraph  => 
            <SectionOrchestraColumn key={s4()}>
              {console.log(paragraph.image.url)}
              <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
              {(paragraph.image.url !== null) && 
                <Image className='img' url={paragraph.image.url} />
              }
            </SectionOrchestraColumn>
          )}
          </SectionOrchestraRow>
        </SectionGeo>
        <div>
        { JSON.stringify(data) }
        </div>
      </main>
    </Fragment>
  )
}