import React from 'react'
import { TitleWrapper } from 'Styled'
import { getParagraphsFromProps } from 'Helpers'


export const IndexDescriptions = ({data}) => {
  const paragraphs = data.body.filter(item => item.slice_type === 'text')
  const buttons = data.body.filter(item => item.slice_type === 'button')

  return (
  <div>
  {paragraphs.map(({primary}) =>
    { getParagraphsFromProps(primary.text) }
  )}
  </div>
)}

export const query = graphql`
  fragment IndexDescriptionsFragment on PrismicDocument {
    data {
      body {
        slice_type
        primary {
          text {
            type
            text
          }
          image {
            url
          }
          icon {
            url
          }
          linktext {
            type
            text
          }
        }
      }
    }
  }
`