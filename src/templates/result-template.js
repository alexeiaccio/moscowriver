import React from 'react'
import Link from 'gatsby-link'

import {
  Header,
  Image
} from 'Components'

const ResultTemplate = ({ data: { result, header } }) => {
  return (
    <div>
    <Header data={header.data} />
    <Image data={result.data} />
    {JSON.stringify(result.data)}
    <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ResultTemplate

export const query = graphql`
  query ResultTemplateQuery($slug: String!) {
    result: prismicDocument(uid: {eq: $slug}) {
      ...ImageFragment
      data {
        title {
          text
        }
        quote {
          text
        }
        body {
          slice_type
          primary {
            anchor
            sectionname
            header {
              text
            }
          }
          items {
            header {
              text
            }
            sectionimage {
              url
            }
            text {
              type
              text
            }
            list {
              text
            }
            row {
              type
              text
            }
          }
        }
      }
    }
    header: prismicDocument(type: {eq: "homepage"}) {
      ...HeaderFragment
    }
  }
`