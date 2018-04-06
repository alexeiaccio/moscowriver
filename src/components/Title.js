import React from 'react'
import styled from 'styled-components'
import getStringFromProps from '../helpers/getStringFromProps'
import { color, fontSize, lineHeights, size } from 'styled-system'
import { key } from 'styled-theme'

const H1 = styled.h1`
  ${color}
  ${fontSize}
  ${lineHeights}
  position: relative;
  display: inline-flex;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    bottom: 12px;
    display: flex;
    width: 100%;
    height: 27px;
    background-color: ${key(['palette', 'black', 0])};
    transition: background-color .4s ease-in-out;
    z-index: -1;
  } 
`

export default ({
  color,
  fontSize, 
  data: { title } 
}) => (
  <H1 color={color} fontSize={fontSize} lineHeights={fontSize} >
    { getStringFromProps(title) }
  </H1>
)

export const query = graphql`
  fragment TitleFragment on PrismicDocument {
    data {
      title {
        text
      }     
    }
  }
`