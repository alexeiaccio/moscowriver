import React from 'react'
import Link from 'gatsby-link'

import {
  Title,
  Image
} from 'Components'

const ResultTemplate = ({ data }) => {
  const node = data.prismicDocument
  return (
    <div>
    <Title data={node.data} />
    <Image data={node.data} />
    <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ResultTemplate

export const query = graphql`
  query ResultTemplateQuery($slug: String!) {
    prismicDocument(uid: {eq: $slug}) {
      data {
        title {
          text
        }
        image {
          url
        }
        body {
          slice_type
          primary {
            header {
              text
            }
          }
        }
      }
    }
  }
`