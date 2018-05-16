import React from "react"

export default ({ data: { image: { url } } }) => (
  <div>
    <img src={url} alt='' />
  </div>
)

export const query = graphql`
  fragment ImageFragment on PrismicDocument {
    data {
      image {
        url
      }
    }
  }
`