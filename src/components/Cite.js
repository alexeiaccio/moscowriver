import React from 'react'

export default ({ data: { cite } }) =>  (
  <div>
    <p>
      {cite[0].text}
    </p>
  </div>
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