import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

const Description = styled.div`
  width: 610px;
  padding: ${key(['space', 7])}px ${key(['space', 9])}px;
  background-color: rgba(0,0,0,.5);
  color: ${key('colors.white')};
  font-size: ${key(['fontSizes', 2])}px;
  font-weight: ${key('fontWeights.medium')};
  line-height: ${key(['lineHeights', 1])};
  border: 10px solid ${key('colors.bright.blue')};
`
export default ({data:  { description }}) => (
  <Description>
  { description }
  </Description>
)