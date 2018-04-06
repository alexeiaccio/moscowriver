import React from 'react'
import styled from 'styled-components'
import { color, fontSize, lineHeights } from 'styled-system'
import getParagraphsFromProps from '../helpers/getParagraphsFromProps'

const Cite = styled.cite`
  ${color}
  ${fontSize}
  ${lineHeights} 
`

export default ({
  color, 
  fontSize, 
  data: { cite } 
}) =>  (
  <Cite color={color} fontSize={fontSize} >
    { getParagraphsFromProps(cite) }
  </Cite>
)

export const query = graphql`
  fragment CiteFragment on PrismicDocument {
    data {
      cite {
        text
      }     
    }
  }
`
/* {
      getStringFirst('text')(title)
      .option('Ooops...')
    } */