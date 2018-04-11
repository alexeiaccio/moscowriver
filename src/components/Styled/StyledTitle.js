import styled from 'styled-components'
import { key } from 'styled-theme'

export const TitleWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${key(['space', 10])}px;
  font-family: ${key('fonts.headers')};
  text-align: center;
  background-color:${key('colors.black')};
  z-index: 1000;
  cursor: pointer;
  &> h1{
    position: relative;
    display: inline-flex;
    z-index: 2000;
    &::before {
      content: '';
      position: absolute;
      bottom: calc(${key(['fontSizes', 0])}px * .19);
      display: flex;
      width: 100%;
      height: calc(${key(['fontSizes', 0])}px * .42);
      background-color: ${key('colors.black')};
      transition: background-color .4s ease-in-out;
      z-index: -1;
    }
  }
  &:hover {
    &> h1::before {
      background-color: ${key('colors.bright.blue')}
    }
  }
`