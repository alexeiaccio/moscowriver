import React from 'react'
import { key } from 'styled-theme'
import { BaseWrapper, WaveWrapper, StyledLink, Row } from 'Styled'
import { WavePattern, Title } from 'Components'

const Header = BaseWrapper.extend`
  height: 100px;
  align-items: flex-start;
  padding-top: 20px;
  & h1{
    position: relative;
    display: inline-flex;
    z-index: 2000;
    &::before {
      content: '';
      position: absolute;
      bottom: calc(${key(['fontSizes', 0])}px * .18);
      display: flex;
      width: 100%;
      height: calc(${key(['fontSizes', 0])}px * .24);
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

const Back = WaveWrapper.extend`
  transform: ${({move}) => 'translateY(' + move + 'px)'};
`

export default ({data, layout, move}) => (
  <Header>
    <Back move={move} >
      <WavePattern />
    </Back>
    <Row>
      <Title color='white' fontSize={1} lineHeight={1} data={data}/>
      <StyledLink to='/'>На главную</StyledLink>
      <StyledLink to='/research/'>Исследование</StyledLink>
    </Row>
  </Header>
)
