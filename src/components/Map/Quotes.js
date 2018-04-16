import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import { getSectorColor } from './getSectorColor'
import {
  Tooltip,
  Sector,
} from 'Styled'

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
      <Manager>
        <Reference>
          {({ ref }) => (
            <g 
              ref={ref}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave} >
              <Sector
                color={getSectorColor(uid)}
                className='sector'              
                >
                <use href={`#${uid}a`} className='shade' />
                <use href={`#${uid}b`} />
              </Sector>
            </g>
          )}
        </Reference>      
        {this.state.hover && ReactDOM.createPortal(
          <Popper
            placement='auto'
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}>
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                <Tooltip color={getSectorColor(uid)}>
                  Hover {uid}
                </Tooltip>
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