import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import map from 'crocks/pointfree/map'
import { findSection, s4, getElementsFromProps } from 'Helpers'

import { ResearchPage, SEO } from 'Components'

const Research = ({ data }) => {
  const sections = data.researchparts.edges
  const results = data.results.edges
  const find = findSection(sections)
  const research = find('research').option({})
  const {
    seotitle,
    seodescription,
    seokeywords,
    seoimage
  } = research.node.data

  return (
    <Fragment>
      <SEO
        uid={research.node.uid}
        title={seotitle}
        description={seodescription}
        keywords={seokeywords}
        image={seoimage.url}
      />
      <ResearchPage data={sections} {...{results}} />
    </Fragment>
  )
}

export default Research

export const query = graphql`
  query ResearchPageQuery {
    researchparts: allPrismicDocument(filter: {type: {eq: "researchparts"}}) {
      edges {
        node {
          ...ResearchHeaderFragment
          ...ResearchCiteFragment
          uid
          data {
            seotitle
            seodescription
            seokeywords
            seoimage {
              url
            }
            body {
              primary {
                header {
                  text
                }
                video {
                  embed_url
                }
                description {
                  type
                  text
                  spans {
                    start
                    end
                    type
                    data {
                      link_type
                      uid
                    }
                  }
                }
              }
              items {
                text {
                  type
                  text
                  spans {
                    data {
                      url
                    }
                  }
                }
                image {
                  url
                }
                textimage {
                  text
                }
              }
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