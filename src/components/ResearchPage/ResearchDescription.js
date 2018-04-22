import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

const Description = styled.div`
  width: ${({width}) =>  width}px;
  padding: ${key(['space', 7])}px ${key(['space', 9])}px;
  margin-bottom: ${key(['space', 10])}px;
  background-color: rgba(0,0,0,.5);
  color: ${key('colors.white')};
  font-size: ${({size}) => key(['fontSizes', size])}px;
  line-height: ${({size}) => key(['lineHeights', size - 1])};
  font-weight: ${key('fontWeights.medium')};
  border: 10px solid ${key('colors.bright.blue')};
`
export default ({width, size, data: { description }}) => (
  <Description width={width} size={size} >
  { description }
  </Description>
)