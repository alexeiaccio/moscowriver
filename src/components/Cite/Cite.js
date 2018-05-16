import React from 'react'
import styled from 'styled-components'
import { color, fontSize, lineHeight } from 'styled-system'
import { getParagraphsFromProps } from 'Helpers'

const Cite = styled.cite`
  ${color}
  ${fontSize}
  ${lineHeight}
`

export default ({
  color,
  fontSize,
  data: { cite }
}) =>  (
  <Cite color={color} fontSize={fontSize} lineHeight={fontSize} >
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