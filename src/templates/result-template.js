import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { ResultPage, SEO } from 'Components'

const ResultTemplate = ({ data }) => {
  const results = data.results.edges
  const definitions = data.definitions.edges
  const {
    seotitle,
    seodescription,
    seokeywords,
    seoimage
  } = data.result.data

  return (
    <Fragment>
      <SEO
        uid={data.result.uid}
        title={seotitle}
        description={seodescription}
        keywords={seokeywords}
        image={seoimage.url}
      />
      <ResultPage data={data.result} {...{results}} {...{definitions}}/>
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
        seoimage {
          url
        }
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
              copyright
            }
            text {
              type
              text
              spans {
                type
                start
                end
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
    definitions: allPrismicDocument(filter: {type: {eq: "definition"}}) {
      edges {
        node {
          uid
          data {
            title {
              type
              text
            }
            definition {
              type
              text
              spans {
                type
                start
                end
              }
            }
          }
        }
      }
    }
  }
`