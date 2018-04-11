import React from 'react'
import { Scroller } from 'react-skroll'
import {
  Header,
  WavePattern,
  WrappedMap,
  Video,
  WavedBack,
  Footer,
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

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const node = this.props.data.allPrismicDocument.edges[0].node

    return (
      <div>
        <SectionOne>
          <IndexTitle data={node.data}/>
          <div>
            <WrappedMap />
            <IndexCite data={node.data}/>
          </div>
        </SectionOne>
        <SectionTwo>
          <Video data={node.data} />
        </SectionTwo>
        <SectionThree >
          <IndexDescriptions data={node.data} />
        </SectionThree>
        <Header data={node.data} />
        <Footer data={node.data} />
      </div>
    )
  }
}

export default IndexPage
