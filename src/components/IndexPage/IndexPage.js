import React from 'react'
import {
  Header,
  WavePattern,
  WrappedMap,
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
} from 'Styled'
import { IndexTitle } from './IndexTitle'
import { IndexCite } from './IndexCite'
import { IndexDescriptions } from './IndexDescriptions'
import { ButtonOrInput } from './ButtonOrInput'
import { SeeVideoButton } from './SeeVideoButton'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const node = this.props.data.homepage.edges[0].node
    const quotes = this.props.data.quotes.edges

    return (
      <main>
        <SectionOne id='one'>
          {/* <IndexTitle data={node.data}/> */}
          <div style={{flex: '1 100%'}} >
            {/* <WrappedMap />
            <IndexCite data={node.data}/> */}
            <MapQuotes data={quotes} />
            {/* <SeeVideoButton data={node.data} name='seevideo' /> */}
          </div>
        </SectionOne>
        {/* <SectionTwo id='two'>
          <RoundButtonBack to='#one' color={['colors', 'gray', 0]} />
          <Video data={node.data} />
          <RoundButtonForward to='#three' color={['colors', 'gray', 0]} text='Дальше' />
        </SectionTwo>
        <SectionThree id='three'>
          <RoundButtonBack to='#two' color='colors.white' />
          <IndexDescriptions data={node.data} />
          <ButtonOrInput data={node.data} name='follow' />
        </SectionThree>
        <Header data={node.data} />
        <Footer data={node.data} /> */}
      </main>
    )
  }
}

export default IndexPage
