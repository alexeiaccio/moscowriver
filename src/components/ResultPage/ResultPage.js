import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import assign from 'crocks/helpers/assign'
import find from 'crocks/Maybe/find'
import propPath from 'crocks/Maybe/propPath'

import {
  Cite,
  Title,
  Navigation,
} from 'Components'
import {
  Section,
  H2,
  Row,
  Column,
} from 'Styled'
import {
  findSection,
  getStringFromProps,
  getElementsFromProps,
  getParagraphsFromProps,
  s4,
} from 'Helpers'
import { default as Header } from './ResultHeader'
import SmallWave from '../../assets/SmallWave.svg'

const SectionOne = Section.extend`
  position: relative;
  justify-content:  space-between;
  align-items: center;
  height: calc(100vh - 120px);
  background: ${({image}) => 'url(' + image + ')'} center no-repeat ${key('colors.black')};
  background-size: cover;
  & * {
    z-index: 10;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%) rgba(0,0,0,.5);
    z-index: 0;
  }
`

const TitleWrapper = styled.div`
  padding: ${key(['space', 12])}px 0;
  display: flex;
  flex-direction: column;
  justify-content:  space-between;
  align-items: center;
  &> h1{
    position: relative;
    display: inline-flex;
    z-index: 2000;
    &::before {
      content: '';
      position: absolute;
      bottom: calc(${key(['fontSizes', 0])}px * .31);
      display: flex;
      width: 100%;
      height: calc(${key(['fontSizes', 0])}px * .44);
      background-color: ${key('colors.pink')};
      z-index: -1;
    }
  }
`

const QuoteWrapper = styled.div`
  max-width: 640px;
  padding: ${key(['space', 7])}px 0;
  text-align: center;
`

const SectionRow = Row.extend`
  flex-wrap: wrap;
  justify-content: center;
  width: 1070px;
`

const SectionPastRow = Row.extend`
  flex-wrap: wrap;
  width: 510px;
`

const SectionHeader = H2.extend`
  margin: 0 0 ${key(['space', 9])}px ${key(['space', 3])}px;
`

const SectionPast = Section.extend`
  padding: ${key(['space', 10])}px 0 ${key(['space', 5])}px;
`

const SectionPresent = Section.extend`
  padding: 0 0 ${key(['space', 5])}px;
`

const Image = styled.div`
  background: ${({url}) => 'url(' + url + ') center no-repeat'};
  background-size:  cover;
`

const SectionPastColumn =  Column.extend`
  position: relative;
  color: ${key('colors.text')};
  padding-bottom: ${key(['space', 10])}px;
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  max-width: 100%;
  & h3 {
    color: ${key('colors.pink')};
    font-size: ${key(['fontSizes', 1])}px;
    line-height: ${key(['lineHeights', 1])};
  }
  & h4 {
    margin-bottom: ${key(['space', 3])}px;
    font-size: ${key(['fontSizes', 2])}px;
    line-height: ${key(['lineHeights', 2])};
  }
  & p {
    clear: both;
    padding-bottom: ${key(['space', 2])}px;
    &:first-of-type {
      margin-top: ${key(['space', 5])}px;
    }
  }
  & .img {
    width:  450px;
    height: 275px;
    top: ${key(['space', 9])}px;
  }
  &:first-of-type {
    max-width: 480px;
    font-weight: ${key('fontWeights.medium')};
    & h3 {
      padding-bottom: ${key(['space', 9])}px;
    }
    & .img {
      width: 570px;
      height: 460px;
      float: right;
      @media (min-width: 1200px) {
        margin-top: -${key(['space', 11])}px;
        margin-right: calc(-50vw + 215px);
      }
      @media (min-width: 1200px) {
        &::after {
          content: '';
          display: block;
          width: 570px;
          height: 460px;
          position: absolute;
          left: calc(-50vw + 215px);
          background: ${({url}) => 'url(' + url + ') center no-repeat'};
          background-size: cover;
          transform: rotateY(180deg);
          z-index: -1;
        }
      }
    }
  }
  &:nth-of-type(2n) {
    & p {
      float: right;
      max-width: 45%;
    }
    & h4 {
      padding-left: 55%;
    }
    & .img {
      float: left;
      @media (min-width: 1200px) {
        margin-left: calc(-50vw + 515px);
      }
    }
  }
  &:nth-of-type(2n+3) {
    & p {
      float: left;
      max-width: 45%;
    }
    & .img {
      float: right;
      @media (min-width: 1200px) {
        margin-right: calc(-50vw + 515px);
      }
    }
  }
  &:nth-of-type(2) p,
  &:nth-of-type(6) p {
    float: none;
    max-width: 720px;
  }
  & span {
    display: block;
    float: right;
    clear: both;
    padding-bottom: ${key(['space', 2])}px;
    padding-left: ${key(['space', 4])}px;
    text-indent: -${key(['space', 4])}px;
    &::before {
      content: '— ';
    }
  }
`

const SectionPresentColumn =  Column.extend`
  position: relative;
  color: ${key('colors.text')};
  padding-bottom: ${key(['space', 10])}px;
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
  max-width: 100%;
  & h3 {
    margin-bottom: ${key(['space', 5])}px;
    color: ${key('colors.pink')};
    font-size: ${key(['fontSizes', 1])}px;
    line-height: ${key(['lineHeights', 1])};
  }
  & p {
    clear: both;
    padding-bottom: ${key(['space', 2])}px;
  }
  & .img {
    width:  450px;
    height: 275px;
    top: ${key(['space', 9])}px;
  }
  &:nth-of-type(2n) {
    & p {
      float: right;
      max-width: 45%;
    }
    & h4 {
      padding-left: 55%;
    }
    & .img {
      float: left;
      @media (min-width: 1200px) {
        margin-left: calc(-50vw + 515px);
      }
    }
  }
  &:nth-of-type(2n+1) {
    & p {
      float: left;
      max-width: 45%;
    }
    & .img {
      float: right;
      @media (min-width: 1200px) {
        margin-right: calc(-50vw + 515px);
      }
    }
  }
`


export default ({data}) => {
  const findSection = xs => name =>
    find(x => x.primary.anchor === name, xs)

  const sections = findSection(data.body)
  const head = propPath([0])
  const body = propPath(['body'])
  const anchor = propPath(['primary', 'anchor'])
  const header = propPath(['primary', 'header'])
  const items = propPath(['items'])

  const sectionsId = name => sections(name).chain(anchor).option('Oops...')
  const sectionsHeader = name => sections(name).chain(header).option([])
  const sectionParagraphs = name => sections(name).chain(items).option([])

  const pageBody = body(data).option([])
  const pageNav = pageBody.map(({primary}, i) =>
    assign({uid: primary.anchor}, {text: primary.sectionname}))

  console.log(
    sectionsId('past'),
    sectionsHeader('past'),
    sectionParagraphs('past')
  )
  return (
    <Fragment>
     <Header data={{title: [{ text: '390 взглядов на Москву-реку' }]}} move={-140} />
     <main>
     <SectionOne id='header' image={data.image.url} >
        <TitleWrapper>
          <Title color='white' fontSize={0} lineHeight={0} data={data}/>
          <QuoteWrapper>
            <Cite color='pink' fontSize={1} data={{cite: data.quote}} />
          </QuoteWrapper>
        </TitleWrapper>
        <Navigation data={ pageNav } />
      </SectionOne>
      <SectionPast id={sectionsId('past')} >
        <SectionPastRow>
          <SectionHeader color='text' shade='pink' >{ getStringFromProps(sectionsHeader('past')) }</SectionHeader>
        </SectionPastRow>
        <SectionRow>
          {sectionParagraphs('past').map(paragraph  =>
            <SectionPastColumn key={s4()} url={paragraph.sectionimage.url} >
              <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
              {(paragraph.sectionimage.url !== null) &&
                <Image className='img' url={paragraph.sectionimage.url} />
              }
            </SectionPastColumn>
          )}
          </SectionRow>
      </SectionPast>
      <SectionPresent id={sectionsId('present')} >
        <Row>
          <SectionHeader color='text' shade='pink' >{ getStringFromProps(sectionsHeader('present')) }</SectionHeader>
        </Row>
        <SectionRow>
          {sectionParagraphs('present').map(paragraph  =>
            <SectionPresentColumn key={s4()} >
              <Fragment key={s4()} children={getElementsFromProps(paragraph.text)} />
              {(paragraph.sectionimage.url !== null) &&
                <Image className='img' url={paragraph.sectionimage.url} />
              }
            </SectionPresentColumn>
          )}
          </SectionRow>
      </SectionPresent>
     </main>
    </Fragment>
  )
}