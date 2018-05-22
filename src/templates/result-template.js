import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { ResultPage } from 'Components'

const ResultTemplate = ({ data }) =>
  <Fragment>
      <Helmet
        title={data.result.data.seotitle}
        meta={[
          { name: 'description', content: data.result.data.seodescription },
          { name: 'keywords', content: data.result.data.seokeywords },
        ]}
      />
    <ResultPage data={data.result} />
  </Fragment>


export default ResultTemplate

export const query = graphql`
  query ResultTemplateQuery($slug: String!) {
    result: prismicDocument(uid: {eq: $slug}) {
      uid
      data {
        seotitle
        seodescription
        seokeywords
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
                  uid
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