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
              onMouseEnter={() => this.props.onMouseEnter()}
              onMouseLeave={() => this.props.onMouseLeave()}
              onClick={() => this.props.onMouseDown()}
              >
              <Sector
                color={getSectorColor(uid)}
                className={`sector ${this.props.isQuote ? 'active' : ''}`}
                >
                <use href={`#${uid}a`} className='shade' />
                <use href={`#${uid}b`} />
              </Sector>
            </g>
          )}
        </Reference>
        {this.props.isTooltip && ReactDOM.createPortal(
          <Popper
            placement='top'
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}
            >
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}
              onMouseEnter={() => this.props.onMouseEnter()}
              onMouseLeave={() => this.props.onMouseLeave()}
              >
                <Tooltip color={getSectorColor(uid)}>
                  {title}
                </Tooltip>
              </div>
            )}
          </Popper>,
          document.querySelector('#index-qoutes-wrapper')
        )}
        {this.props.isQuote && ReactDOM.createPortal(
          <Popper
            placement='auto'
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}
            >
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}
              //onMouseEnter={() => this.props.onMouseDown()}
              //onMouseLeave={() => this.props.onMouseOut()}
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