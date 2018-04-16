import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import SectorsDefs from './SectorsDefs'
import { getSectorColor } from './getSectorColor'
import {
  QoutesWrapper,
  Markers,
  Sector,
} from 'Styled'

import styled from 'styled-components'

const Tooltip = styled.div`
  background-color: red;
`

class Quotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      click: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({ hover: true })
  }

  handleMouseLeave = () => {
    this.setState({ hover: false, click: false })
  }

  handleMouseDown = () => {
    this.setState({ click: true, hover: false })
  }

  render() {
    const { node } = this.props
    const {uid} = node
    return (
      <Fragment>
        <Reference>
          {({ ref }) => (
            <Sector
              color={getSectorColor(uid)}
              className='sector'
              ref={ref}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              >
              <use href={`#${uid}a`} className='shade' />
              <use href={`#${uid}b`} />
            </Sector>
          )}
        </Reference>      
        {this.state.hover && ReactDOM.createPortal(
          <Popper
            placement="auto"
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}>
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                <Tooltip>
                  Hover {uid}
                  {console.log(style)}
                </Tooltip>
              </div>
            )}
          </Popper>,
          document.querySelector('#index-qoutes-wrapper')
        )}
      </Fragment>
    )
  }
}

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
        <Manager>
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
        </Manager>
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