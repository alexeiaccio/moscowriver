import React, {Fragment} from 'react'
import SectorsDefs from './SectorsDefs'
import { getSectorColor } from './getSectorColor'
import Quotes from './Quotes'
import {
  QoutesWrapper,
  QoutesBack,
  Markers,
} from 'Styled'

class MapQuotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qoutes: Array(this.props.data.length)
        .fill(false)
        .map((x, i) => i === 3 ? x = true : x = false),
      tooltips: Array(this.props.data.length).fill(false),
      mount: false,
    }
  }

  componentDidMount() {
    this.setState({ mount: true })
  }

  handleMouseDown(id) {
    const newState =this.state.qoutes
      .map((x, i) => i === id ? x = true : x = false)
    this.setState({ qoutes: newState })
    const tooltipsLeave = this.state.tooltips
    tooltipsLeave[id] = false
    this.setState({ tooltips: tooltipsLeave })
  }

  handleMouseEnter(id) {
    if(!this.state.qoutes.some((x) => x === true)) {
      const tooltipsEnter = this.state.tooltips
      tooltipsEnter[id] = true
      this.setState({ tooltips: tooltipsEnter })
    }
  }

  handleMouseLeave(id) {
    const tooltipsLeave = this.state.tooltips
    tooltipsLeave[id] = false
    this.setState({ tooltips: tooltipsLeave })
  }

  handleMouseOut(id) {
    const qoutesLeave = this.state.qoutes
    qoutesLeave[id] = false
    setTimeout(() =>
      this.setState({ qoutes: qoutesLeave })
    , 800)
  }

  handleQuotesClose(e) {
    if(e.target.tagName !== 'use') {
      const qoutesLeave =
        this.state.qoutes.slice()
          .map(qoute => qoute = false)
      this.setState({ qoutes: qoutesLeave })
    }
  }

  render() {
    const { data } = this.props
    return (
      <QoutesWrapper
        id='index-qoutes-wrapper'
        onClick={(e) => this.handleQuotesClose(e)}
        >
        <QoutesBack />
        <Markers
          xmlns='http://www.w3.org/2000/svg'
          width='609' height='514'
          viewBox='0 0 609 514'
          >
          {this.state.mount && data.map(({node}, id) => (
            <Quotes
              key={node.uid}
              node={node}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={() => this.handleMouseLeave(id)}
              onMouseOut={() => this.handleMouseOut(id)}
              onMouseDown={() => this.handleMouseDown(id)}
              isTooltip={this.state.tooltips[id]}
              isQuote={this.state.qoutes[id]}
              />
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