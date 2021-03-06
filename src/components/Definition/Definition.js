import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'Helpers'

const DefSpan =styled.span`
  cursor: pointer;
  text-decoration-color: ${key('colors.yellow')};
  text-decoration-line: underline;
  text-decoration-style: dashed;
  transition: all .2s ease-in-out;
  &:hover {
    color: ${key('colors.yellow')};
  }
  &::after {
    content: '?';
    margin: 0 ${key(['space', 1])}px;
    display: inline-block;
    width: 15px;
    height: 15px;
    font-size: 11px;
    line-height: 15px;
    font-weight: 600;
    text-align: center;
    border: 1px solid ${key('colors.yellow')};
    border-radius: 50%;
    color: ${key('colors.yellow')};
    transform: translateY(-2px);
  }
`

const Arrow = styled.div`
  position: absolute;
  width: ${key(['space', 3])}px;
  height: ${key(['space', 3])}px;
  border-radius: 50%;
  background-color: ${({color}) => key('colors.' + color)};
  box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  &[data-placement*='top'] {
    left: calc(50% - 15px/2);
    bottom: 5px;
  }
  &[data-placement*='bottom'] {
    left: calc(50% - 15px/2);
    top: 10px;
  }
`

const Popover = styled.div`
  background-color: ${key('colors.white')};
  box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  z-index: 8000;
  &[data-placement*='top'] {
    transform: translateY(-35px);
  }
  &[data-placement*='bottom'] {
    transform: translateY(40px);
  }
`

const DefWrapper = styled.div`
  width: 420px;
  padding: ${key(['space', 5])}px ${key(['space', 7])}px;
  border: 10px solid ${({color}) => key('colors.' + color)};
`

const DefHeader = styled.h6`
  position: relative;
  display: inline-block;
  color: ${({color}) => key('colors.' + color)};
  font-weight: ${key('fontWeights.medium')};
  font-size: ${key(['fontSizes', 3])}px;
  line-height: ${key(['lineHeights', 3])};
  z-index: 5000;
  &::after {
    content: '';
    position: absolute;
    bottom: calc(${key(['fontSizes', 3])}px * .37);
    display: flex;
    width: 100%;
    height: calc(${key(['fontSizes', 3])}px * .48);
    background-color: ${({shade}) => key('colors.' + shade)};
    transition: background-color .4s ease-in-out;
    z-index: -1;
  }
`

const Def = styled.div`
  margin-top: 10px;
  font-family: ${key('fonts.base')};  
  font-size: ${key(['fontSizes', 6])}px;
  line-height: ${key(['lineHeights', 5])};
  & strong {
    font-weight: ${key('fontWeights.semibold')};
  }
  & em {
    font-style: italic;
  }
`

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
  animation: `${Appear} .2s ease`
}

class Definition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopover: false
    }
  }

  hidePopover = () => {
    this.state.isPopover && this.setState({ isPopover: false })
  }

  componentDidMount = () => {
    document.getElementById('menu-wrapper').addEventListener('click', this.hidePopover)
  }

  componentWillUnmount = () => {
    document.getElementById('menu-wrapper').removeEventListener('click', this.hidePopover)
  }

  handleMouseClick = () => {
    !this.state.isPopover && this.setState({ isPopover: true })
  }

  render() {
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <span
              ref={ref}
              onClick={() => this.handleMouseClick()}
            >
              <DefSpan>
              { this.props.children }
              </DefSpan>
            </span>
          )}
        </Reference>
        {this.state.isPopover && ReactDOM.createPortal(
          <Popper
            placement='top'
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}
          >
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={Object.assign({}, style, {zIndex: 5000})} data-placement={placement}
              >
                <Popover style={aprearStyle} data-placement={placement}>
                  <DefWrapper color='yellow' >
                    <DefHeader color='text' shade='yellow' >
                    { RichText.asText(this.props.definitions[0].node.data.title) }
                    </DefHeader>
                    <Def>
                    { RichText.render(this.props.definitions[0].node.data.definition, linkResolver) }
                    </Def>
                  </DefWrapper>
                </Popover>
                <Arrow
                  color='yellow'
                  data-placement={placement}
                  style={Object.assign({}, arrowProps.style, aprearStyle)}
                />
              </div>
            )}
          </Popper>,
          document.querySelector('#definition-wrapper')
        )}
      </Manager>
    )
  }
}

export default Definition