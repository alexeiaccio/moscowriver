import React from 'react'
import Link from 'gatsby-link'
import map from 'crocks/pointfree/map'
import { s4, getElementsFromProps } from 'Helpers'
import { ResearchPage } from 'Components'

const Research = ({ data }) => {
  const sections = data.researchparts.edges
  const thisSection = name => sections.filter(x => x.node.uid === name)
  const nextsteps = thisSection('nextsteps')[0].node.data.body
  const timeline = thisSection('timeline')[0].node.data.body

  return (
    <ResearchPage data={sections} />
  )
}
/* <div> {getElementsFromProps(nextsteps[0].items[0].text)} </div>
<div> {map(map(getElementsFromProps), map(({text}) => text))(timeline[0].items)} </div> */

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
            body {
              primary {
                header {
                  text
                }
                video {
                  embed_url
                }
                description {
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
  }
`