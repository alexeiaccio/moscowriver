import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { ResultPage, SEO } from 'Components'

const ResultTemplate = ({ data }) => {
  const results = data.results
  const definitions = data.definitions.edges
  const siteTitle = data.homepage.data.seotitle
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
      <ResultPage data={data.result} {...{results}} {...{definitions}} {...{siteTitle}} />
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
              dimensions {
                height
              }
            }
            caption
            text {
              type
              text
              spans {
                type
                start
                end
                data {
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
    results: prismicDocument(type: {eq: "menu"}) {
      data {
        body {
          primary {
            linkname
            uid {
              uid
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
    homepage: prismicDocument(type: {eq: "homepage"}) {
      data {
        seotitle
      }
    }
  }
`