import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

const Tooltip = styled.span`
  display: block;
  position: relative;
  padding: ${key(['space', 2])}px ${key(['space', 5])}px;
  background-color: ${({color}) => key('colors.' + color)};
  color: ${key('colors.white')};
  font-size: ${key(['fontSizes', 6])}px;
  font-weight: ${key('fontWeights.semibold')};
  transform: translateY(-${key(['space', 3])}px);
  box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  opacity: .75;
  cursor: pointer;
  z-index: 7000;
`

const Arrow = styled.span`
  position: absolute;
  width: ${key(['space', 3])}px;
  height: ${key(['space', 3])}px;
  border-radius: 50%;
  background-color: ${({color}) => key('colors.' + color)};
  box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  cursor: pointer;
  &[data-placement*='top'] {
    left: calc(50% - 15px/2);
    bottom: 10px;
  }
  &[data-placement*='bottom'] {
    left: calc(50% - 15px/2);
    top: 10px;
  }
  &[data-placement*='left'] {
    top: calc(50% - 15px/2);
    right: 10px;
  }
  &[data-placement*='right'] {
    top: calc(50% - 15px/2);
    left: 10px;
  }
`

const Mark = styled.span`
  & > span {
    display: inline-flex;
    position: relative;
    width: ${key(['space', 7])}px;
    height: ${key(['space', 7])}px;
    border-radius: 50%;
    margin-right: ${key(['space', 2])}px;
    margin-bottom: ${key(['space', 2])}px;
    background-color: ${key('colors.yellow')};
    cursor: pointer;
  }
`

class Function extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTooltip: false
    }
  }

  handleMouseEnter = () => {
    !this.state.isTooltip && this.setState({ isTooltip: true })
  }

  handleMouseLeave = () => {
    this.state.isTooltip && this.setState({ isTooltip: false })
  }

  render() {
    const text = this.props.data

    return (
      <Mark>
        <Manager>
          <Reference>
          {({ ref }) => (
            <span
              ref={ref}
              onMouseOver={() => this.handleMouseEnter()}
              onMouseLeave={() => this.handleMouseLeave()}
            ></span>
          )}
          </Reference>
          {this.state.isTooltip &&
            <Popper
              placement='top'
              modifiers={{ preventOverflow: { enabled: true } }}
              eventsEnabled={true}
              positionFixed={true}
            >
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                <Tooltip color="text">
                  {text}
                </Tooltip>
                <Arrow
                  color="text"
                  data-placement={placement}
                  style={arrowProps.style}
                />
              </div>
            )}
            </Popper>
          }
        </Manager>
      </Mark>
    )
  }
}

export default Function