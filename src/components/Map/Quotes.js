import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import { getSectorColor } from './getSectorColor'
import Quote from './Quote'
import {
  Tooltip,
  Sector,
  Popover,
  Arrow
} from 'Styled'

class Quotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      click: props.node.uid === '162' ? true : false,
    }
  }

  handleMouseEnter = () => {
    this.setState({ hover: true })
  }

  handleMouseLeave = () => {
    this.setState({ hover: false })
  }

  handleMouseDown = () => {
    this.setState({ click: true, hover: false })
  }

  handleMouseOut = () => {
    setTimeout(() =>
      this.setState({ click: false })
    , 800)
  }

  render() {
    const { node } = this.props
    const {uid, data} = node
    const title = data.title[0].text
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <g
              ref={ref}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onMouseDown={this.handleMouseDown}
              >
              <Sector
                color={getSectorColor(uid)}
                className={`sector ${this.state.click ? 'active' : ''}`}
                >
                <use href={`#${uid}a`} className='shade' />
                <use href={`#${uid}b`} />
              </Sector>
            </g>
          )}
        </Reference>
        {this.state.hover && ReactDOM.createPortal(
          <Popper
            placement='top'
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}
            >
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              >
                <Tooltip color={getSectorColor(uid)}>
                  {title}
                </Tooltip>
              </div>
            )}
          </Popper>,
          document.querySelector('#index-qoutes-wrapper')
        )}
        {this.state.click && ReactDOM.createPortal(
          <Popper
            placement='auto'
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}
            >
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}
              onMouseEnter={this.handleMouseDown}
              onMouseLeave={this.handleMouseOut}
              >
                <Popover>
                  <Quote data={data} color={getSectorColor(uid)} />
                </Popover>
                <Arrow
                  color={getSectorColor(uid)}
                  data-placement={placement}
                  style={arrowProps.style}
                />
              </div>
            )}
          </Popper>,
          document.querySelector('#index-qoutes-wrapper')
        )}
      </Manager>
    )
  }
}

export default Quotes