import React from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import { Manager, Reference, Popper } from 'react-popper'
import { getSectorColor } from './getSectorColor'
import Quote from './Quote'
import { Tooltip, Sector, Popover, Arrow } from 'Styled'

const Appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  25% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const aprearStyle = {
  animation: `${Appear} .6s ease-in-out`,
}

class Quotes extends React.Component {
  render() {
    const { node } = this.props
    const { uid, data } = node
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
                <animate
                  attributeName="opacity"
                  values="0;.25;.5"
                  dur="400ms"
                  repeatCount="1"
                />
                <use xlinkHref={`#${uid}a`} className="shade" />
                <use xlinkHref={`#${uid}b`} />
              </Sector>
            </g>
          )}
        </Reference>
        {this.props.isTooltip &&
          ReactDOM.createPortal(
            <Popper
              placement="top"
              modifiers={{
                hide: { enabled: true },
                preventOverflow: { enabled: false },
              }}
              eventsEnabled={true}
              positionFixed={false}
            >
              {({ placement, ref, style, arrowProps }) => (
                <div
                  ref={ref}
                  style={Object.assign({}, style, { zIndex: 5000 })}
                  data-placement={placement}
                  onMouseEnter={() => this.props.onMouseEnter()}
                  onMouseLeave={() => this.props.onMouseLeave()}
                >
                  <Tooltip color={getSectorColor(uid)}>{title}</Tooltip>
                </div>
              )}
            </Popper>,
            document.querySelector('#index-qoutes-wrapper')
          )}
        {this.props.isQuote &&
          ReactDOM.createPortal(
            <Popper
              placement="auto"
              modifiers={{
                hide: {
                  enabled: true,
                },
                preventOverflow: {
                  enabled: true,
                  boundariesElement: document.querySelector('#one'),
                },
              }}
              eventsEnabled={true}
              positionFixed={false}
            >
              {({ placement, ref, style, arrowProps }) => (
                <div
                  ref={ref}
                  style={Object.assign({}, style, { zIndex: 5000 })}
                  data-placement={placement}
                >
                  <Popover style={aprearStyle}>
                    <Quote data={data} color={getSectorColor(uid)} />
                  </Popover>
                  <Arrow
                    color={getSectorColor(uid)}
                    data-placement={placement}
                    style={Object.assign({}, arrowProps.style, aprearStyle)}
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
