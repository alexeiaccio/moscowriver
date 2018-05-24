import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import styled, { withComponent } from 'styled-components'
import { key } from 'styled-theme'

import { Link } from '../Link/Link'
import { s4 } from 'Helpers'

const Wrapper = styled.div`
  position: relative;
`

const Menu = styled.div`
  max-width: 370px;
  padding: ${key(['space', 2])}px ${key(['space', 3])}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${key('colors.black')};
  color: ${key('colors.white')};
  font-family: ${key('fonts.base')};
  font-size: ${key(['fontSizes', 6])}px;
  font-weight: ${key('fontWeights.semibold')};
  border: 10px solid ${key('colors.bright.blue')};
  box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  cursor: pointer;
  &[data-placement*='top'] {
    transform: translate(-140px, -${key(['space', 5])}px);
  }
  &[data-placement*='bottom'] {
    transform: translate(-140px, ${key(['space', 5])}px);
  }
`

const StyledLink = styled.div`
  position: relative;
  color: ${key('colors.white')};
  font-size: ${key(['fontSizes', 4])}px;
  font-family: ${key('fonts.base')};
  font-weight: ${key('fontWeights.normal')};
  text-decoration: none;
  z-index: 2000;
  &::after {
    content: '';
    position: absolute;
    display: flex;
    bottom: calc(${key(['fontSizes', 4])}px * .15);
    height: calc(${key(['fontSizes', 4])}px * .55);
    width: 100%;
    background-color: ${key('colors.black')};
    transition: background-color .4s ease-in-out;
    z-index: -1;
  }
  &:hover::after {
    background-color: ${key('colors.bright.blue')};
  }
`

const MenuLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${key('colors.white')};
  font-size: ${key(['fontSizes', 6])}px;
  font-family: ${key('fonts.base')};
  font-weight: ${key('fontWeights.normal')};
  height: 35px;
  line-height: 1;
  text-decoration: none;
  z-index: 2000;
  &::after {
    content: '';
    position: absolute;
    display: flex;
    bottom: 12px;
    height: 8px;
    width: 100%;
    background-color: ${key('colors.black')};
    transition: background-color .4s ease-in-out;
    z-index: -1;
  }
  &:hover::after {
    background-color: ${key('colors.bright.blue')};
  }
`

class ResultLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenu: false
    }
  }

  hideMenu = () => {
    this.state.isMenu && this.setState({ isMenu: false })
  }

  componentDidMount = () => {
    document.getElementById('menu-wrapper').addEventListener('click', this.hideMenu)
  }

  componentWillUnmount = () => {
    document.getElementById('menu-wrapper').removeEventListener('click', this.hideMenu)
  }

  handleMouseClick = () => {
    !this.state.isMenu ? this.setState({ isMenu: true }) : this.setState({ isMenu: false })
  }

  render() {
    const { results } = this.props
    const resultItems = results.map(result => result.node)

    return (
      <Wrapper>
        <Manager>
          <Reference>
          {({ ref }) => (
            <div
              ref={ref}
              onClick={() => this.handleMouseClick()}
            >
              <StyledLink>Результаты</StyledLink>
            </div>
          )}
          </Reference>
          {this.state.isMenu && ReactDOM.createPortal(
            <Popper
              placement='bottom'
              modifiers={{ preventOverflow: { enabled: true } }}
              eventsEnabled={true}
              positionFixed={true}
            >
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={ Object.assign({}, style, {zIndex: 9000}) } data-placement={placement}>
                <Menu data-placement={placement}>
                {resultItems.map(item => (
                  <MenuLink key={s4()} to={`/${item.uid}`} >
                  { item.data.title[0].text }
                  </MenuLink>
                ))}
                </Menu>
              </div>
            )}
            </Popper>,
            document.querySelector('#menu-wrapper')
          )}
        </Manager>
      </Wrapper>
    )
  }

}

export default ResultLinks