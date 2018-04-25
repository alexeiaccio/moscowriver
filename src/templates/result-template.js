import React, { Fragment } from 'react'

import { ResultPage } from 'Components'

const ResultTemplate = ({ data }) =>
  <Fragment>
    <ResultPage data={data.result.data} />
  </Fragment>


export default ResultTemplate

export const query = graphql`
  query ResultTemplateQuery($slug: String!) {
    result: prismicDocument(uid: {eq: $slug}) {
      data {
        title {
          text
        }
        quote {
          text
        }
        image {
          url
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
  }
`