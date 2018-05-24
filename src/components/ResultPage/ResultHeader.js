import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'
import { BaseWrapper, WaveWrapper, StyledLink, Row } from 'Styled'
import { WavePattern, Title, ResultLinks } from 'Components'

import { Link } from '../Link/Link'

const TitleLink = styled(Link)`
  position: relative;
  display: inline-flex;
  text-decoration: none !important;
  z-index: 200;
  &::before {
    content: '';
    position: absolute;
    bottom: calc(${key(['fontSizes', 0])}px * .27);
    display: flex;
    width: 100%;
    height: calc(${key(['fontSizes', 0])}px * .34);
    background-color: ${key('colors.black')};
    transition: background-color .4s ease-in-out;
    z-index: -1;
  }
  &:hover::before {
    background-color: ${key('colors.bright.blue')};
  }
`

const Header = BaseWrapper.extend`
  height: 100px;
  align-items: flex-start;
  padding-top: 20px;
`

const Back = WaveWrapper.extend`
  transform: ${({move}) => 'translateY(' + move + 'px)'};
`

export default ({data, results, layout, move, id}) => (
  <Header id={id} >
    <Back move={move} >
      <WavePattern />
    </Back>
    <Row>
      <TitleLink to='/'>
        <Title color='white' fontSize={1} lineHeight={1} data={data}/>
      </TitleLink>
      <StyledLink to='/research/'>Исследование</StyledLink>
      <ResultLinks {...{results}} />
    </Row>
  </Header>
)
