import React from 'react'
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
import { IndexButtons } from './IndexButtons'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const node = this.props.data.allPrismicDocument.edges[0].node

    return (
      <main>
        <SectionOne>
          <IndexTitle data={node.data}/>
          <div>
            {/* <WrappedMap /> */}
            <IndexCite data={node.data}/>
          </div>
        </SectionOne>
        <SectionTwo>
          <Video data={node.data} />
        </SectionTwo>
        <SectionThree >
          <IndexDescriptions data={node.data} />
          <IndexButtons data={node.data} name='follow' />
        </SectionThree>
        <Header data={node.data} />
        <Footer data={node.data} />
      </main>
    )
  }
}

export default IndexPage
