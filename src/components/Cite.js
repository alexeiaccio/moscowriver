import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'styled-system'
import getParagraphsFromProps from '../helpers/getParagraphsFromProps'

const Cite = styled.cite`
  ${fontSize}
`

export default ({  
  fontSize, 
  data: { cite } 
}) =>  (
  <Cite fontSize={fontSize} >
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