import React from 'react'
import styled from 'styled-components'
import { color, fontSize, lineHeights } from 'styled-system'
import getStringFromProps from '../helpers/getStringFromProps'

const H1 = styled.h1`
  ${color}
  ${fontSize}
  ${lineHeights} 
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