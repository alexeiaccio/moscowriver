import React from 'react'
import { TitleWrapper } from 'Styled'


export const IndexButtons = ({data}) => {
  const buttons = data.body.filter(item => item.slice_type === 'button')

  return (
  <div>
    { JSON.stringify(buttons) }
  </div>
)}

export const query = graphql`
  fragment IndexButtonsFragment on PrismicDocument {
    data {
      body {
        slice_type
        primary {
          name {
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