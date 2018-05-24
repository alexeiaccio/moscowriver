import styled from 'styled-components'
import { key } from 'styled-theme'
import Link from 'gatsby-link'

const BaseWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${key(['space', 10])}px;
  font-family: ${key('fonts.headers')};
  background-color: ${key('colors.black')};
  flex: 0 0 auto;
  z-index: 3000;
  cursor: pointer;
`

const TitleWrapper = BaseWrapper.extend`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  & h1{
    margin-top: ${key(['space', 1])}px;
    position: relative;
    display: inline-flex;
    z-index: 2000;
    &::before {
      content: '';
      position: absolute;
      bottom: calc(${key(['fontSizes', 0])}px * .31);
      display: flex;
      width: 100%;
      height: calc(${key(['fontSizes', 0])}px * .44);
      background-color: ${key('colors.black')};
      transition: background-color .4s ease-in-out;
      z-index: -1;
    }
  }
  &:hover {
    & h1::before {
      background-color: ${key('colors.bright.blue')};
    }
  }
`

const StyledLink = styled(Link)`
  position: relative;
  display: inline-flex;
  color: ${key('colors.white')};
  font-family: ${key('fonts.base')};
  font-weight: ${key('fontWeights.normal')};
  font-size: ${key(['fontSizes', 4])}px;
  text-decoration: none;
  z-index: 2000;
  &::after {
    content: '';
    position: absolute;
    bottom: calc(${key(['fontSizes', 4])}px * .15);
    display: flex;
    width: 100%;
    height: calc(${key(['fontSizes', 4])}px * .55);
    background-color: ${key('colors.black')};
    transition: background-color .4s ease-in-out;
    z-index: -1;
  }
  &:hover::after {
    background-color: ${key('colors.bright.blue')};
  }
`

const H3 = StyledLink.extend`
  font-family: ${key('fonts.headers')};
  font-size: ${key(['fontSizes', 2])}px;
  &::after {
    bottom: calc(${key(['fontSizes', 2])}px * .19);
    height: calc(${key(['fontSizes', 2])}px * .42);
  }
  &:hover::after {
    background-color: ${key('colors.bright.blue')};
  }
`

const H2 = styled.h2`
  position: relative;
  display: inline-flex;
  font-family: ${key('fonts.headers')};
  font-size: ${key(['fontSizes', 1])}px;
  font-weight: ${key('fontWeights.normal')};
  color: ${({color}) => key('colors.' + color)};
  z-index: 5;
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    bottom: calc(${key(['fontSizes', 1])}px * .21);
    height: calc(${key(['fontSizes', 1])}px * .45);
    background-color: ${({shade}) => key('colors.' + shade)};
    z-index: -1;
  }
`

const HeaderWrapper = BaseWrapper.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  width: ${key('sizes.width')};
`


export {
  BaseWrapper,
  TitleWrapper,
  HeaderWrapper,
  H3,
  H2,
  StyledLink,
  Row
}