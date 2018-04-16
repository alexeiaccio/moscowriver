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
  position: relative;
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