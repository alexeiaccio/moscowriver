import styled, {keyframes} from 'styled-components'
import { key } from 'styled-theme'
import MapBackBlured from '../../assets/MapBackBlured.png'
import MapBack from '../../assets/MapBack.png'

const Appear = keyframes`
  0% {
    opacity: 0;
    filter: blur(1000);
  }
  75% {
    opacity: 0;
    filter: blur(1000);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
`
export const MapBlock = styled.div`
  height: 182vh;
  min-height: 2500px;
  width: 3500px;
  flex: 0 0 3500px;
  margin-top: -33px;
  transform: scale(.55);
  background: url(${MapBackBlured}) 50% calc(50% + 1px) repeat;
  background: url(${MapBack}) 50% calc(50% + 1px) no-repeat;
  background-size: 3500px 2000px;
  animation: ${Appear} 1.6s ease-in-out;
`

export const MapWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: '#d2d2d2'
`

export const QoutesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 100%;
  justify-content: center;
  align-items: flex-start;
`

export const QoutesBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const Markers = styled.svg`
  margin-top: calc(50vh - 400px);
  margin-left: -34px;
  transform: scale(1.1);
  z-index: 0;
`

export const Sector = styled.g`
  fill: ${({color}) => key('colors.' + color)};
  cursor: pointer;
  opacity: 0.66;
  transition: all .2s ease-in-out;
  //
  &:hover {
    opacity: 1;
  }
  &.active {
    fill: ${({active}) => key('colors.' + active)};
    opacity: 1;
  }
  & .shade {
    opacity: 0.5;
  }
`

export const Tooltip = styled.div`
  position: relative;
  padding: ${key(['space', 2])}px ${key(['space', 5])}px;
  background-color: ${({color}) => key('colors.' + color)};
  color: ${key('colors.white')};
  font-size: ${key(['fontSizes', 6])}px;
  font-weight: ${key('fontWeights.semibold')};
  transform: translateY(-${key(['space', 3])}px);
  box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  cursor: pointer;
  z-index: 5000;
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 25px/2);
    top: 50px;
    width: ${key(['space', 5])}px;
    height: ${key(['space', 5])}px;
    border-radius: 50%;
    background-color: ${({color}) => key('colors.' + color)};
    box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  }
`

export const Arrow = styled.div`
  position: absolute;
  width: ${key(['space', 7])}px;
  height: ${key(['space', 7])}px;
  border-radius: 50%;
  background-color: ${({color}) => key('colors.' + color)};
  box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  &[data-placement*='top'] {
    left: calc(50% - 25px/2);
    bottom: -45px;
  }
  &[data-placement*='bottom'] {
    left: calc(50% - 25px/2);
    top: -45px;
  }
  &[data-placement*='left'] {
    top: calc(50% - 25px/2);
    right: -45px;
  }
  &[data-placement*='right'] {
    top: calc(50% - 25px/2);
    left: -45px;
  }
`

export const Popover = styled.div`
  background-color: ${key('colors.white')};
  box-shadow: 0px 4px 10px rgba(0,0,0,.25);
  z-index: 8000;
`