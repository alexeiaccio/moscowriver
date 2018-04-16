import React, {Fragment} from 'react'
import SectorsDefs from './SectorsDefs'
import { getSectorColor } from './getSectorColor'
import Quotes from './Quotes'
import {
  QoutesWrapper,
  Markers,
} from 'Styled'

class MapQuotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mount: false }
  }
  componentDidMount() {
    this.setState({ mount: true })
  }
  render() {
    const { data } = this.props
    return (
      <QoutesWrapper id='index-qoutes-wrapper'>
        <Markers
          xmlns='http://www.w3.org/2000/svg'
          width='609' height='514'
          viewBox='0 0 609 514'
          >
          {this.state.mount && data.map(({node}) => (
            <Quotes key={node.uid} node={node}/>
          ))}
        <SectorsDefs />
        </Markers>
      </QoutesWrapper>
  )}
}

export default MapQuotes

export const query = graphql`
  fragment QuotesFragment on PrismicDocument {
    uid
    data {
      title {
        text
      }
      quote {
        text
      }
      image {
        url
      }
      body {
        primary {
          link {
            uid
          }
          placeholder
        }
      }
    }
  }
`