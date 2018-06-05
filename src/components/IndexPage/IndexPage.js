import React, { Fragment } from 'react'
import {
  Header,
  Footer,
  Lazy,
  Map,
  MapQuotes,
  RoundButtonBack,
  RoundButtonForward,
  RoundButtonWithImage,
  Video,
  WavedBack,
  WavePattern,
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
      <main>
        <SectionOne id='one'>
          <IndexTitle data={node.data} results={results}/>
          <Lazy height={800}>
            <ContentWrapper>
              <Lazy height={800}>
                <Map />
              </Lazy>
              <IndexCite data={node.data}/>
              <MapQuotes data={quotes} />
              <SeeVideoButton data={node.data} name='seevideo' />
            </ContentWrapper>
          </Lazy>
        </SectionOne>
        <SectionTwo id='two'>
          <RoundButtonBack to='#one' color={['colors', 'gray', 0]} />
          <Lazy height={700} offset={400} >
            <Video data={node.data} />
          </Lazy>
          <RoundButtonForward to='#three' color={['colors', 'gray', 0]} text='Дальше' />
        </SectionTwo>
        <SectionThree id='three'>
          <RoundButtonBack to='#two' color='colors.white' />
          <Lazy height={400}>
            <IndexDescriptions data={node.data} />
          </Lazy>
          <Lazy height={50}>
            <ButtonOrInput data={node.data} name='follow' />
          </Lazy>
        </SectionThree>
      </main>
      <Header data={node.data} results={results}/>
      <Footer data={node.data} />
    </Fragment>
  )
}
