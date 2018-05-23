import React, { Fragment } from 'react'
import {
  Header,
  WavePattern,
  Map,
  Video,
  WavedBack,
  Footer,
  RoundButtonBack,
  RoundButtonForward,
  RoundButtonWithImage,
  MapQuotes,
} from 'Components'
import {
  Section,
  SectionOne,
  SectionTwo,
  SectionThree,
  WrappedCite,
  ContentWrapper
} from 'Styled'
import { IndexTitle } from './IndexTitle'
import { IndexCite } from './IndexCite'
import { IndexDescriptions } from './IndexDescriptions'
import { ButtonOrInput } from './ButtonOrInput'
import { SeeVideoButton } from './SeeVideoButton'

export default ({ data }) => {
  const node = data.homepage
  const quotes = data.quotes.edges
  const results = data.result.edges

  return (
    <Fragment>
      <main id='menu-wrapper'>
        <SectionOne id='one'>
          <IndexTitle data={node.data} results={results}/>
          <ContentWrapper>
            <Map />
            <IndexCite data={node.data}/>
            <MapQuotes data={quotes} />
            <SeeVideoButton data={node.data} name='seevideo' />
          </ContentWrapper>
        </SectionOne>
        <SectionTwo id='two'>
          <RoundButtonBack to='#one' color={['colors', 'gray', 0]} />
          <Video data={node.data} />
          <RoundButtonForward to='#three' color={['colors', 'gray', 0]} text='Дальше' />
        </SectionTwo>
        <SectionThree id='three'>
          <RoundButtonBack to='#two' color='colors.white' />
          <IndexDescriptions data={node.data} />
          <ButtonOrInput data={node.data} name='follow' />
        </SectionThree>
      </main>
      <Header data={node.data} results={results}/>
      <Footer data={node.data} />
    </Fragment>
  )
}
