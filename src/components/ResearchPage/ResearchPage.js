import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import Maybe from 'crocks/Maybe'
import map from 'crocks/pointfree/map'
import reduce from 'crocks/pointfree/reduce'
import assoc from 'crocks/helpers/assoc'
import assign from 'crocks/helpers/assign'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import { RichText } from 'prismic-reactjs'

import {
  Section, H2, Row, Column,
  Copyright, Accio
} from 'Styled'
import {
  Navigation, RoundButtonWithImage,
  Link, Lazy, ResultLinks,
} from 'Components'
import {
  findSection, getStringFromProps,
  getElementsFromProps, getParagraphsFromProps, 
  s4, linkResolver, isOdd, htmlSerializer, htmlSerializer2
} from 'Helpers'
import patternWaves from '../../assets/PatternWavesWhite.svg'
import IconEye from '../../assets/IconEye.svg'
import SmallWave from '../../assets/SmallWave.svg'
import Timeline from '../../assets/Timeline.svg'

import { default as Header } from './ResearchHeader'
import { HeadCite, FootCite } from './ResearchCite'
import { default as Description } from './ResearchDescription'
import ResearchForm from './ResearchForm'

const SectionOne = Section.extend`
  justify-content:  space-between;
  align-items: center;
  height: calc(100vh - 120px);
  min-height: 640px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzSURBVHgBpYxRDgAgCEKfq4N1s/Lkpc0P/dYNYcAQ4FBv+xPDNWgyvx4RurFSgRms/akHyzsJj/3feW8AAAAASUVORK5CYII=) repeat, ${({image}) => 'url(' + image + ')'} no-repeat ${key('colors.black')};
  background-size: 6px 6px, cover;
  background-position: center;
`

const SectionRow = Row.extend`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1070px;
`

const SectionCommandRow = Row.extend`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 1070px;
`

const SectionGeoRow = SectionRow.extend`
  justify-content: space-between;
`

const SectionRiverRow = Row.extend`
  flex-wrap: wrap;
  justify-content: flex-start;
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
  padding: ${key(['space', 12])}px 0 ${key(['space', 10])}px;
  line-height: ${key(['lineHeights', 2])};
`

const SectionProject = Section.extend`
  padding: ${key(['space', 5])}px 0 ${key(['space', 5])}px;
  line-height: ${key(['lineHeights', 2])};
`

const SectionHeader = H2.extend`
  margin: 0 0 ${key(['space', 9])}px ${key(['space', 3])}px;
  line-height: ${key(['lineHeights', 2])};
`

const SectionGeoHeader = H2.extend`
  margin: 0 0 ${key(['space', 9])}px ${key(['space', 2])}px;
  line-height: ${key(['lineHeights', 2])};
`

const SectionOrchestraHeader = H2.extend`
  margin: 0 0 ${key(['space', 9])}px ${key(['space', 5])}px;
  line-height: ${key(['lineHeights', 2])};
  &::before {
    content: '';
    position: absolute;
    display: inline-flex;
    width: 100vw;
    left: -101vw;
    bottom: calc(${key(['fontSizes', 1])}px * .21);
    height: calc(${key(['fontSizes', 1])}px * .43);
    background-color: ${({shade}) => key('colors.' + shade)};
    z-index: -1;
  }
  &::after {
    width: 100vw;
    right: -101vw;
    background-color: ${({shade}) => key('colors.' + shade)};
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
    background-size: contain;
  }
`

const SectionColumn =  Column.extend`
  color: ${key('colors.text')};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  max-width: 45%;
  -webkit-flex: 45%;  
  & h4 {
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 2])}px;
    position: relative;
  }
  &:last-of-type {
    margin-top: ${key(['space', 10])}px;
    max-width: 720px;
    font-weight: ${key('fontWeights.medium')};
    text-indent: -19px;
  }
`

const FormColumn =  Column.extend`
  margin-top: ${key(['space', 9])}px;
  max-width: 720px;
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
  & p {
    margin-bottom: ${key(['space', 2])}px;
  }
  & p:last-child {}
  &:last-child > a {
    bottom: ${key(['space', 9])}px;
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
  -webkit-flex: 45%;
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
  & .img {
    width:  450px;
    height: 275px;
    top: ${key(['space', 9])}px;
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
    position: relative;
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
  &:nth-of-type(2n) {
    & p {
      float: right;
      max-width: 55%;
    }
    & h4 {
      padding-left: 45%;
    }
    & .img {
      float: left;
      @media (min-width: 1200px) {
        margin-left: -25px;
      }
    }
  }
  &:nth-of-type(2n+3) {
    & p {
      float: left;
      max-width: 55%;
    }
    & .img {
      float: right;
      @media (min-width: 1200px) {
        margin-right: -25px;
      }
    }
  }
`

const SectionCommandColumn =  Column.extend`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${key(['space', 9])}px;
  color: ${key('colors.text')};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  & h3 {
    margin-bottom: ${key(['space', 5])}px;
    color: ${key('colors.text')};
    font-size: ${key(['fontSizes', 2])}px;
    text-align: center;
  }
  & figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .img {
    height: 125px;
    width: 125px;
    margin-bottom: ${key(['space', 5])}px;
    border-radius: 50%;
    background-color: ${key('colors.silver')};
  }
  & span {
    margin-bottom: ${key(['space', 2])}px;
  }
  &:nth-of-type(n+2) {
    width: 25%;
  }
  &:nth-of-type(1),
  &:nth-of-type(8) {
    width: 100%;
    margin-bottom: ${key(['space', 3])}px;
  }
  &:last-of-type {
    width: 100%;
  }
`

const shiftBack = keyframes`
  0% {
    left: -14px;
  }
  100% {
    left: 0px;
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
  & h3, h4 {
    max-height: 70px;
  }
  &:nth-of-type(1) {
    & div> * {
      max-width: 45%;
    }
    & p {
      height: 130px;
    }
    & div > *:nth-child(1),
    & div > *:nth-child(2) {
      text-align: right;
    }
    & div > *:nth-child(3),
    & div > *:nth-child(4) {
      padding-left: 65%;
    }
    & div > *:nth-child(5),
    & div > *:nth-child(6) {
      padding-left: 55%;
    }
  }
  &:nth-of-type(2) {
    & div > * {
      max-width: 35%;
    }
    & p {
      height: 92px;
    }
    & div > *:nth-child(2) {
      margin-top: 140px;
    }
    & div > *:nth-child(3) {
      height: 105px;
    }
    & div > *:nth-child(9) {
      height: 125px;
    }
    & div > *:nth-child(2),
    & div > *:nth-child(3),
    & div > *:nth-child(6),
    & div > *:nth-child(7),
    & div > *:nth-child(10),
    & div > *:nth-child(11) {
      padding-left: 55%;
    }
  }
  &:nth-of-type(3) {
    max-width: 720px;
    & h3 {
      margin-top: 190px;
      margin-bottom:35px;
      position: relative;
      display: inline-flex;
      font-family: ${key('fonts.headers')};
      font-size: ${key(['fontSizes', 1])}px;
      font-weight: ${key('fontWeights.normal')};
      color: ${key('colors.blue')};
      line-height: ${key(['lineHeights', 2])};
      z-index: 5;
      &:last-of-type {
        transform: translateX(205px);
      }
    }
    & p {
      font-weight: ${key('fontWeights.medium')};
      margin-bottom: ${key(['space', 2])}px;
    }
    & a {
      position: relative;
      color: ${key('colors.bright.blue')};
      font-weight: ${key('fontWeights.semibold')};
      text-decoration: none;
      transition: all .2s ease-in-out;
      &:hover {
        color: ${key('colors.bright.blue')};
      }
    }
  }
`

const SectionBlue = Section.extend`
  margin: ${key(['space', 10])}px 0;
  padding: ${key(['space', 10])}px 0 ${key(['space', 12])}px;
  background-color: ${key('colors.blue')};
  background-image: url(${patternWaves});
  background-repeat: repeat-x;
  background-position-y: calc(100% + 225px);
`

const SectionGeo = Section.extend`
  padding: ${key(['space', 10])}px 0 ${key(['space', 5])}px;
`

const SectionTimeline = Section.extend`
  padding: ${key(['space', 5])}px 0;
  background: url(${Timeline}) center 110px no-repeat;
`

const SectionCommand = Section.extend`
  padding: ${key(['space', 10])}px 0;
`

const FootGradient = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background: linear-gradient(${({reversed}) => reversed ? 180 : 0}deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`

export default ({data, results}) => {
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

  const sectionsId = name => sections(name).chain(uid).option('')
  const sectionsHeader = name => sections(name).chain(body).chain(head).chain(header).option([])
  const sectionParagraphs = name => sections(name).chain(body).chain(head).chain(items).option([])
  const sectionUrl = text => text[text.length-1].spans[0].data.url

  const pageTitle = sections('about').chain(body).chain(head).chain(title).option([])
  const pageCite = sections('about').chain(body).chain(head).chain(cite).option([])
  const pageDescription = sections('about').chain(body).chain(head).chain(description).option([])
  const pageBackImg = sections('about').chain(body).chain(second).chain(items).chain(head).chain(image).option([])
  const footDescription = sections('foot').chain(body).chain(head).chain(description).option([])
  const footCite = sections('foot').chain(body).chain(head).chain(cite).option([])
  const pageAnchors = data.map(edge => assoc('uid', uid(edge).option({}))({}))
  const pageHeaders = data.map(edge => body(edge).chain(head).chain(header).chain(head).option({}))
  const pageNav = [
    {text: 'Зачем проводили исследование', uid: 'context'},
    {text: 'Как проводили исследование', uid: 'geography'},
    {text: 'Методы исследования', uid: 'river'},
    {text: 'Что получили в результате', uid: 'timeline'},
    {text: 'Что будет дальше', uid: 'nextsteps'},
    {text: 'Наша команда', uid: 'command'},
  ]

  return (
    <Fragment>
      <Header data={{title: pageTitle}} {...{results}} move={-140} />
      <main>
        <SectionOne image={pageBackImg} >
          <HeadCite color='blue' fontSize={1} data={{cite: pageCite}} />
          <Description width={760} size={3} data={{description: pageDescription}} />
          <Navigation data={ pageNav } />
        </SectionOne>
        <SectionContext id={sectionsId('context')} >          
          <Row>
              <SectionHeader color='text' shade='bright.blue' >
              { getStringFromProps(sectionsHeader('context')) }
              </SectionHeader>
          </Row>
            <SectionRow>
              {sectionParagraphs('context').map(paragraph =>
                <SectionColumn key={s4()}>
                  <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
                </SectionColumn>
              )}
            </SectionRow>
        </SectionContext>
        <SectionGeo id={sectionsId('geography')}>
          <Row>
            <Lazy height={50}>
              <SectionGeoHeader color='text' shade='bright.blue' >
              { getStringFromProps(sectionsHeader('geography')) }
              </SectionGeoHeader>
            </Lazy>
          </Row>
          <SectionGeoRow>
          {sectionParagraphs('geography').map(paragraph  =>
            <Lazy key={s4()} height={600}>
              <SectionGeoColumn key={s4()}>
                <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
                {(paragraph.image.url !== null) &&
                  <Image className='img' url={paragraph.image.url} />
                }
              </SectionGeoColumn>
            </Lazy>
          )}
          </SectionGeoRow>
        </SectionGeo>
        <SectionBlue id={sectionsId('river')} >
          <Row>
            <Lazy height={50}>
              <SectionHeader color='text' shade='white' >
              { getStringFromProps(sectionsHeader('river')) }
              </SectionHeader>
            </Lazy>
          </Row>
          <Lazy height={600}>
            <SectionRiverRow>
              {sectionParagraphs('river').map(paragraph =>
                <SectionRiverColumn key={s4()}>
                  <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
                  {(paragraph.image.url !== null) &&
                    <Image className='img' url={paragraph.image.url} />
                  }
                </SectionRiverColumn>
              )}
            </SectionRiverRow>
          </Lazy>
        </SectionBlue>        
        <SectionTimeline id={sectionsId('timeline')} >
          <SectionTimelineRow>
            <SectionHeader color='text' shade='bright.blue' >
            { getStringFromProps(sectionsHeader('timeline')) }
            </SectionHeader>
          </SectionTimelineRow>
          <SectionTimelineRow>
          {sectionParagraphs('timeline').map(paragraph =>
            <Lazy key={s4()} height={2000}>
              <SectionTimelineColumn key={s4()}>
                <Fragment key={s4()} children={RichText.render(paragraph.text, () => '/', htmlSerializer2)} />
              </SectionTimelineColumn>
            </Lazy>
          )}
          </SectionTimelineRow>
          <SectionTimelineRow>
            <FormColumn>
              <ResearchForm />
            </FormColumn>
          </SectionTimelineRow>
        </SectionTimeline>
        <SectionBlue id={sectionsId('nextsteps')} >
          <SectionNextRow>
            <Lazy height={50}>
              <SectionHeader color='text' shade='white' >
              { getStringFromProps(sectionsHeader('nextsteps')) }
              </SectionHeader>
            </Lazy>
          </SectionNextRow>
          <SectionNextRow>
          {sectionParagraphs('nextsteps').map(paragraph =>
            <Lazy key={s4()} height={600}>
              <SectionNextColumn key={s4()}>
                <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
              </SectionNextColumn>
            </Lazy>
          )}
          </SectionNextRow>
        </SectionBlue>
        <SectionProject id={sectionsId('projectmoscow')} >
          <SectionOrchestraRow>
              <SectionOrchestraHeader color='text' shade='bright.blue' >
              { getStringFromProps(sectionsHeader('projectmoscow')) }
              </SectionOrchestraHeader>
          </SectionOrchestraRow>
          <SectionOrchestraRow>
            {sectionParagraphs('projectmoscow').map(paragraph =>              
              <SectionProjectColumn key={s4()}>
                { getParagraphsFromProps(paragraph.text) }
              </SectionProjectColumn>
            )}
          </SectionOrchestraRow>
        </SectionProject>
        <SectionGeo id={sectionsId('orchestra')}>
          <SectionOrchestraRow>
            <Lazy height={50}>
              <SectionOrchestraHeader color='text' shade='text' >
              { getStringFromProps(sectionsHeader('orchestra')) }
              </SectionOrchestraHeader>
            </Lazy>
          </SectionOrchestraRow>
          <SectionOrchestraRow>
          {sectionParagraphs('orchestra').map(paragraph  =>
            <Lazy key={s4()} height={600}>
              <SectionOrchestraColumn key={s4()}>
                <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
                {(paragraph.image.url !== null) &&
                  <Link key={s4()}  to='http://orchestra-design.com/' target="_blank" rel="noopener">
                    <Image key={s4()}  className='img' url={paragraph.image.url} />
                  </Link>
                }
              </SectionOrchestraColumn>
            </Lazy>
          )}
          </SectionOrchestraRow>
        </SectionGeo>
        <SectionGeo id={sectionsId('meganom')}>
          <SectionOrchestraRow>
            <Lazy height={50}>
              <SectionOrchestraHeader color='text' shade='text' >
              { getStringFromProps(sectionsHeader('meganom')) }
              </SectionOrchestraHeader>
            </Lazy>
          </SectionOrchestraRow>
          <SectionOrchestraRow>
          {sectionParagraphs('meganom').map(paragraph  =>
            <Lazy key={s4()} height={600}>
              <SectionOrchestraColumn key={s4()}>
                <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
                {(paragraph.image.url !== null) &&
                  <Link key={s4()}  to='http://meganom.moscow/ru/' target="_blank" rel="noopener">
                    <Image key={s4()}  className='img' url={paragraph.image.url} />
                  </Link>
                }
              </SectionOrchestraColumn>
            </Lazy>
          )}
          </SectionOrchestraRow>
        </SectionGeo>
        <SectionCommand id={sectionsId('command')} >
          <SectionRow>
            <Lazy height={50}>
              <SectionHeader color='text' shade='bright.blue' >
              { getStringFromProps(sectionsHeader('command')) }
              </SectionHeader>
            </Lazy>
          </SectionRow>
          <Lazy key={s4()} height={600}>
            <SectionCommandRow>
            {sectionParagraphs('command').map(paragraph  =>
              <SectionCommandColumn key={s4()}>
                <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
                {(paragraph.image.url !== null) &&
                  <figure>
                    <Image className='img' url={paragraph.image.url} />
                    <figcaption>{text(paragraph.textimage).option('')}</figcaption>
                  </figure>
                }
              </SectionCommandColumn>
            )}
            </SectionCommandRow>
          </Lazy>
          <Lazy key={s4()} height={50}>
            <Copyright color='text' >Разработка сайта&ensp;<Accio href='http://www.accio.pro/' target='_blank' rel='noreferrer' color='black' /></Copyright>
          </Lazy>
        </SectionCommand>
        <SectionOne image={pageBackImg} >
          <FootGradient reversed />
          <FootCite color='blue' fontSize={1} data={{cite: footCite}} />
          <FootGradient />
        </SectionOne>
      </main>
      <Header data={{title: pageTitle}} {...{results}} move={50} />
    </Fragment>
  )
}