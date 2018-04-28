import React, { Fragment } from 'react'

import { ResultPage } from 'Components'

const ResultTemplate = ({ data }) =>
  <Fragment>
    <ResultPage data={data.result} />
  </Fragment>


export default ResultTemplate

export const query = graphql`
  query ResultTemplateQuery($slug: String!) {
    result: prismicDocument(uid: {eq: $slug}) {
      uid
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
              spans {
                data {
                  url
                }
              }
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