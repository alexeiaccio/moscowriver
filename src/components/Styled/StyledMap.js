import styled from 'styled-components'
import { key } from 'styled-theme'
import MapBack from '../../assets/MapBack.png'

export const MapBlock = styled.div`
  height: 2000px;
  width: 3500px;
  flex: 0 0 auto;
  margin-top: calc(50vh - 977px);
  transform: scale(.55);
  background: url(${MapBack});
  & div {
    background-color: rgba(255,255,255,0) !important;
  }
`

export const MapWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`

export const QoutesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 100%;
  justify-content: center;
  align-items: flex-start;
`

export const Markers = styled.svg`
  margin-top: calc(50vh - 380px);
  margin-left: -34px;
  transform: scale(1.1);
`

export const Sector = styled.g`
  fill: ${({color}) => key('colors.' + color)};
  cursor: pointer;
  opacity: 0.5;
  transition: all .2s ease-in-out;
  //
  &:hover {
    opacity: 1;
  }
  &.active {
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
`