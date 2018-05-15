import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import IconBoat from '../../assets/IconBoat.svg'
import IconBook from '../../assets/IconBook.svg'
import IconBottle from '../../assets/IconBottle.svg'
import IconCinema from '../../assets/IconCinema.svg'
import IconDance from '../../assets/IconDance.svg'
import IconDog from '../../assets/IconDog.svg'
import IconEat from '../../assets/IconEat.svg'
import IconFish from '../../assets/IconFish.svg'
import IconGang from '../../assets/IconGang.svg'
import IconPiss from '../../assets/IconPiss.svg'
import IconPram from '../../assets/IconPram.svg'
import IconRun from '../../assets/IconRun.svg'
import IconSkate from '../../assets/IconSkate.svg'
import IconSky from '../../assets/IconSky.svg'
import IconSport from '../../assets/IconSport.svg'
import IconSwim from '../../assets/IconSwim.svg'
import IconTree from '../../assets/IconTree.svg'
import IconVelo from '../../assets/IconVelo.svg'
import IconWalk from '../../assets/IconWalk.svg'
import IconWalking from '../../assets/IconWalking.svg'

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
    background-image: url(${({icon}) => icon});
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${({color}) => key('colors.' + color)};
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

  getColor = (text) => {
    switch (true) {
      case text.toLowerCase().includes('транс'):
      case text.toLowerCase().includes('дорож'):
      case text.toLowerCase().includes('марш'):
        return 'yellow'
        break
      case text.toLowerCase().includes('зон'):
      case text.toLowerCase().includes('обор'):
      case text.toLowerCase().includes('кин'):
      case text.toLowerCase().includes('лек'):
      case text.toLowerCase().includes('бесед'):
      case text.toLowerCase().includes('площ'):
      case text.toLowerCase().includes('прок'):
      case text.toLowerCase().includes('встр'):
        return 'green'
        break
      default: return 'pink'
    }
  }

  getIcon = (text) => {
    switch (true) {
      case text.toLowerCase().includes('речн'):
        return IconBoat
        break
      case text.toLowerCase().includes('чте'):
      case text.toLowerCase().includes('лек'):
        return IconBook
        break
      case text.toLowerCase().includes('спирт'):
        return IconBottle
        break
      case text.toLowerCase().includes('посв'):
      case text.toLowerCase().includes('рожд'):
        return IconDance
        break
      case text.toLowerCase().includes('соб'):
      case text.toLowerCase().includes('выг'):
      case text.toLowerCase().includes('кинолог'):
        return IconDog
        break
      case text.toLowerCase().includes('кино'):
        return IconCinema
        break
      case text.toLowerCase().includes('шаш'):
        return IconEat
        break
      case text.toLowerCase().includes('рыб'):
      case text.toLowerCase().includes('лов'):
        return IconFish
        break
      case text.toLowerCase().includes('комп'):
      case text.toLowerCase().includes('встр'):
      case text.toLowerCase().includes('драк'):
        return IconGang
        break
      case text.toLowerCase().includes('туал'):
        return IconPiss
        break
      case text.toLowerCase().includes('дет'):
        return IconPram
        break
      case text.toLowerCase().includes('бег'):
      case text.toLowerCase().includes('беж'):
        return IconRun
        break
      case text.toLowerCase().includes('скейт'):
        return IconSkate
        break
      case text.toLowerCase().includes('лыж'):
        return IconSky
        break
      case text.toLowerCase().includes('физ'):
      case text.toLowerCase().includes('турн'):
        return IconSport
        break
      case text.toLowerCase().includes('куп'):
        return IconSwim
        break
      case text.toLowerCase().includes('дер'):
      case text.toLowerCase().includes('субб'):
      case text.toLowerCase().includes('био'):
        return IconTree
        break
      case text.toLowerCase().includes('вел'):
        return IconVelo
        break
      case text.toLowerCase().includes('ход'):
        return IconWalking
        break
      default: return IconWalk
    }
  }

  render() {
    const text = this.props.data

    return (
      <Mark
        icon={this.getIcon(text)}
        color={this.getColor(text)}
      >
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