import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { ResultPage } from 'Components'

const ResultTemplate = ({ data }) => {
  const results = data.results.edges

  return (
    <Fragment>
        <Helmet
          title={data.result.data.seotitle}
          meta={[
            { name: 'description', content: data.result.data.seodescription },
            { name: 'keywords', content: data.result.data.seokeywords },
          ]}
        />
      <ResultPage data={data.result} {...{results}} />
    </Fragment>
  )
}


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
            sectiontype
            anchor
            sectionname
            header {
              type
              text
            }
          }
          items {
            header {
              type
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
              type
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
    results: allPrismicDocument(filter: {type: {eq: "result"}}) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`