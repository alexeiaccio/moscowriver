import React from 'react'
import { getStringFromProps } from 'Helpers'
import { H3 } from 'Styled'

export default ({data: { title }}) => (
  <H3 to='/'>
    { getStringFromProps(title) }
  </H3>
)

export const query = graphql`
  fragment HeaderFragment on PrismicDocument {
    data {
      title {
        text
      }
    }
  }
`