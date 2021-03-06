import React from 'react'
import { Manager, Reference, Popper } from 'react-popper'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import IconBeach from '../../assets/IconBeach.svg'
import IconBench from '../../assets/IconBench.svg'
import IconBoat from '../../assets/IconBoat.svg'
import IconBook from '../../assets/IconBook.svg'
import IconBottle from '../../assets/IconBottle.svg'
import IconBus from '../../assets/IconBus.svg'
import IconCanal from '../../assets/IconCanal.svg'
import IconCar from '../../assets/IconCar.svg'
import IconCinema from '../../assets/IconCinema.svg'
import IconClean from '../../assets/IconClean.svg'
import IconCult from '../../assets/IconCult.svg'
import IconDance from '../../assets/IconDance.svg'
import IconDog from '../../assets/IconDog.svg'
import IconDuck from '../../assets/IconDuck.svg'
import IconEat from '../../assets/IconEat.svg'
import IconFish from '../../assets/IconFish.svg'
import IconGang from '../../assets/IconGang.svg'
import IconIceSkate from '../../assets/IconIceSkate.svg'
import IconNav from '../../assets/IconNav.svg'
import IconPath from '../../assets/IconPath.svg'
import IconPiss from '../../assets/IconPiss.svg'
import IconPlayground from '../../assets/IconPlayground.svg'
import IconPhoto from '../../assets/IconPhoto.svg'
import IconPram from '../../assets/IconPram.svg'
import IconRun from '../../assets/IconRun.svg'
import IconSit from '../../assets/IconSit.svg'
import IconSkate from '../../assets/IconSkate.svg'
import IconSky from '../../assets/IconSky.svg'
import IconSleigh from '../../assets/IconSleigh.svg'
import IconSport from '../../assets/IconSport.svg'
import IconSun from '../../assets/IconSun.svg'
import IconSwim from '../../assets/IconSwim.svg'
import IconTennis from '../../assets/IconTennis.svg'
import IconTree from '../../assets/IconTree.svg'
import IconVelo from '../../assets/IconVelo.svg'
import IconVolley from '../../assets/IconVolley.svg'
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
  &[data-placement*='bottom'] {
    transform: translateY(5px);
  }
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
    top: 5px;
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

  getIcon = (text) => {
    switch (true) {      
      case text.toLowerCase().includes('бег'):
      case text.toLowerCase().includes('беж'):
      case text.toLowerCase().includes('мараф'):
        return IconRun
        break        
      case text.toLowerCase().includes('трав'):
      case text.toLowerCase().includes('газон'):
      case text.toLowerCase().includes('пикн'):
        return IconSit
        break     
      case text.toLowerCase().includes('деть'):
      case text.toLowerCase().includes('коляс'):
      case text.toLowerCase().includes('ребен'):
        return IconPram
        break
      case text.toLowerCase().includes('игр'):
      case text.toLowerCase().includes('детскими площадками'):
      case text.toLowerCase().includes('детской площадке'):
      case text.toLowerCase().includes('детская площадка'):
      case text.toLowerCase().includes('детскую площадку'):
        return IconPlayground
        break        
      case text.toLowerCase().includes('парку'):
      case text.toLowerCase().includes('парко'):
      case text.toLowerCase().includes('машин'):
      case text.toLowerCase().includes('автом'):
      case text.toLowerCase().includes('метал'):
      case text.toLowerCase().includes('пробок'):
      case text.toLowerCase().includes('пробк'):
      case text.toLowerCase().includes('приезж'):
        return IconCar
        break        
      case text.toLowerCase().includes('вело'):
      case text.toLowerCase().includes('проезжа'):
        return IconVelo
        break        
      case text.toLowerCase().includes('скейт'):
      case text.toLowerCase().includes('ролик'):
        return IconSkate
        break
      case text.toLowerCase().includes('гулят'):
      case text.toLowerCase().includes('гуляю'):
      case text.toLowerCase().includes('прогул'):
      case text.toLowerCase().includes('иду'):
      case text.toLowerCase().includes('проходят'):
      case text.toLowerCase().includes('вернутьс'):
      case text.toLowerCase().includes('пешеход'):
      case text.toLowerCase().includes('пешк'):
      case text.toLowerCase().includes('переход'):
        return IconWalk
        break         
      case text.toLowerCase().includes('дере'):
      case text.toLowerCase().includes('субб'):
      case text.toLowerCase().includes('био'):
      case text.toLowerCase().includes('природ'):
      case text.toLowerCase().includes('зелен'):
      case text.toLowerCase().includes('парк'):
        return IconTree
        break 
      case text.toLowerCase().includes('куп'):
        return IconSwim
        break
      case text.toLowerCase().includes('загор'):
      case text.toLowerCase().includes('пляж'):
        return IconBeach
        break
      case text.toLowerCase().includes('спирт'):
      case text.toLowerCase().includes('выпив'):
      case text.toLowerCase().includes('кальян'):
        return IconBottle
        break
      case text.toLowerCase().includes('речн'):
      case text.toLowerCase().includes('теплох'):
        return IconBoat
        break
      case text.toLowerCase().includes('автобус'):
      case text.toLowerCase().includes('троллей'):
      case text.toLowerCase().includes('транспорт'):
        return IconBus
        break
      case text.toLowerCase().includes('посв'):
      case text.toLowerCase().includes('рожд'):
      case text.toLowerCase().includes('фейер'):
      case text.toLowerCase().includes('диско'):
      case text.toLowerCase().includes('танц'):
        return IconDance
        break
      case text.toLowerCase().includes('соба'):
      case text.toLowerCase().includes('выг'):
      case text.toLowerCase().includes('кинолог'):
      case text.toLowerCase().includes('питомц'):
        return IconDog
        break
      case text.toLowerCase().includes('утк'):
      case text.toLowerCase().includes('уток'):
      case text.toLowerCase().includes('уточек'):
        return IconDuck
        break
      case text.toLowerCase().includes('кино'):
        return IconCinema
        break
      case text.toLowerCase().includes('очист'):
      case text.toLowerCase().includes('уборк'):
      case text.toLowerCase().includes('мусор'):
        return IconClean
        break    
      case text.toLowerCase().includes('ходь'):
        return IconWalking
        break        
      case text.toLowerCase().includes('лыж'):
      return IconSky
      break
      case text.toLowerCase().includes('физ'):
      case text.toLowerCase().includes('турник'):
      case text.toLowerCase().includes('спорт'):
        return IconSport
        break
      case text.toLowerCase().includes('культ'):
        return IconCult
        break        
      case text.toLowerCase().includes('маршрут'):
      case text.toLowerCase().includes('дорог'):
      case text.toLowerCase().includes('сквозн'):
      case text.toLowerCase().includes('транзит'):
      case text.toLowerCase().includes('следуют'):
      case text.toLowerCase().includes('связь'):
        return IconPath
        break   
      case text.toLowerCase().includes('реке'):
      case text.toLowerCase().includes('обзор'):
      case text.toLowerCase().includes('видов'):
      case text.toLowerCase().includes('воды'):
      case text.toLowerCase().includes('спуск'):
        return IconSun
        break        
      case text.toLowerCase().includes('отдых'):
      case text.toLowerCase().includes('скамей'):
      case text.toLowerCase().includes('палатк'):
      case text.toLowerCase().includes('ночу'):
        return IconBench
        break        
      case text.toLowerCase().includes('речн'):
      case text.toLowerCase().includes('судн'):
      case text.toLowerCase().includes('теплох'):
      case text.toLowerCase().includes('водн'):
      case text.toLowerCase().includes('пункт'):
        return IconBoat
        break        
      case text.toLowerCase().includes('чте'):
      case text.toLowerCase().includes('книг'):
      case text.toLowerCase().includes('лекц'):
      case text.toLowerCase().includes('лект'):
        return IconBook
        break        
      case text.toLowerCase().includes('рыб'):
      case text.toLowerCase().includes('лов'):
        return IconFish
        break  
      case text.toLowerCase().includes('шаш'):
      case text.toLowerCase().includes('плов'):
      case text.toLowerCase().includes('поуж'):
      case text.toLowerCase().includes('барб'):
      case text.toLowerCase().includes('обед'):
        return IconEat
        break      
      case text.toLowerCase().includes('навиг'):
      case text.toLowerCase().includes('стенд'):
      case text.toLowerCase().includes('инфо'):
      case text.toLowerCase().includes('экск'):
      case text.toLowerCase().includes('истор'):
        return IconNav
        break
      case text.toLowerCase().includes('комп'):
      case text.toLowerCase().includes('встр'):
      case text.toLowerCase().includes('драк'):
      case text.toLowerCase().includes('дерут'):
      case text.toLowerCase().includes('груп'):
      case text.toLowerCase().includes('подрос'):
      case text.toLowerCase().includes('мероприят'):
      case text.toLowerCase().includes('семейн'):
      case text.toLowerCase().includes('свидан'):
      case text.toLowerCase().includes('фест'):
        return IconGang
        break
      case text.toLowerCase().includes('коньк'):
        return IconIceSkate
        break
      case text.toLowerCase().includes('туал'):
        return IconPiss
        break
      case text.toLowerCase().includes('фото'):
      case text.toLowerCase().includes('любу'):
      case text.toLowerCase().includes('наблюд'):
        return IconPhoto
        break
      case text.toLowerCase().includes('санк'):
      case text.toLowerCase().includes('горк'):
        return IconSleigh
        break
      case text.toLowerCase().includes('теннис'):
      case text.toLowerCase().includes('корт'):
        return IconTennis
        break
      case text.toLowerCase().includes('волей'):
        return IconVolley
        break
      case text.toLowerCase().includes('набере'):
      case text.toLowerCase().includes('спуск'):
      case text.toLowerCase().includes('вод'):
      case text.toLowerCase().includes('склон'):
        return IconCanal
        break      
      default: return IconWalk
    }
  }

  render() {
    const text = this.props.data

    return (
      <Mark
        icon={this.getIcon(text)}
        color={'pink'}
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
                <Tooltip color="text" data-placement={placement}>
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