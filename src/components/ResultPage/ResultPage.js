import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import propPath from 'crocks/Maybe/propPath'
import assign from 'crocks/helpers/assign'

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

export default ({data}) => {
  const body = propPath(['body'])

  const pageBody = body(data).option([])
  const pageNav = pageBody.map(({primary}, i) =>
    assign({uid: primary.anchor}, {text: primary.sectionname}))

  console.log(

  )
  return (
    <Fragment>
     <Header data={{title: [{ text: '390 взглядов на Москву-реку' }]}} move={-140} />
     <main>
     <SectionOne image={data.image.url} >
        <TitleWrapper>
          <Title color='white' fontSize={0} lineHeight={0} data={data}/>
          <QuoteWrapper>
            <Cite color='pink' fontSize={1} data={{cite: data.quote}} />
          </QuoteWrapper>
        </TitleWrapper>
        <Navigation data={ pageNav } />
      </SectionOne>
     </main>
    </Fragment>
  )
}