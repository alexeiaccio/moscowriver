import React from 'react'
import Link from 'gatsby-link'
import map from 'crocks/pointfree/map'
import { s4, getElements } from 'Helpers'

const ResearchPage = ({ data }) => {
  const sections = data.allPrismicDocument.edges
  const thisSection = name => sections.filter(x => x.node.uid === name)
  const nextsteps = thisSection('nextsteps')[0].node.data.body
  const timeline = thisSection('timeline')[0].node.data.body
  //console.log(timeline[0].items[0].text)

  return (
    <div style={{fontSize: '16px'}}>
      <div> {getElements(nextsteps[0].items[0].text)} </div>
      <div> {map(map(getElements), map(({text}) => text))(timeline[0].items)} </div>
    </div>
  )
}

export default ResearchPage

export const query = graphql`
  query ResearchPageQuery {
    allPrismicDocument(filter: {type: {eq: "researchparts"}}) {
      edges {
        node {
          uid
          data {
            body {
              primary {
                title {
                  text
                }
                header {
                  text
                }
                video {
                  embed_url
                }
                cite {
                  text
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