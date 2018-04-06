import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'styled-system'
import getStringFromProps from '../helpers/getStringFromProps'

export const H1 = styled.h1`
  ${fontSize}
`

export default ({ 
  fontSize, 
  data: { title } 
}) => (
  <H1 fontSize={fontSize} >
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