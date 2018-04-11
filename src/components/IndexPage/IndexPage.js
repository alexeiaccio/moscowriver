import React from 'react'
import Link from 'gatsby-link'
import { Scroller } from 'react-skroll'
import {
  Title,
  Cite,
  WavePattern,
  WrappedMap,
  Video,
  WavedBack,
} from 'Components'
import {
  Section,
  SectionOne,
  SectionTwo,
  SectionThree,
  ScrollWrapper,
  WrappedCite,
} from 'Styled'
import { IndexTitle } from './IndexTitle'
import { IndexCite } from './IndexCite'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const node = this.props.data.allPrismicDocument.edges[0].node

    return (
      <ScrollWrapper>
        <Scroller>
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
          </SectionThree>
        </Scroller>
      </ScrollWrapper>
    )
  }
}

export default IndexPage
