import React from 'react'
import styled from 'styled-components'
import { color, fontSize, lineHeight } from 'styled-system'
import { getStringFromProps } from 'Helpers'

const H1 = styled.h1`
  ${color}
  ${fontSize}
  ${lineHeight}
`

export default ({
  color,
  fontSize,
  lineHeight,
  data: { title }
}) => (
  <H1 color={color} fontSize={fontSize} lineHeight={lineHeight} >
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