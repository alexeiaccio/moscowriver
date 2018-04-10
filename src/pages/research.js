import React from 'react'
import Link from 'gatsby-link'
import { s4 } from 'Helpers'

const ResearchPage = ({ data }) => {
  const sections = data.allPrismicDocument.edges
  return (
    <div style={{fontSize: '16px'}}>
      <ul>
      {sections.map(({node: {uid,data}}) => (
        <li key={s4()} >
        <h2>{uid}</h2>
        <ul>{data.body[0].items.map(({text}) => (
          <li key={s4()} >{text === null ? 'null' : JSON.stringify(text) }</li>
        ))}</ul>
        </li>
      ))}
      </ul>
      <Link to="/">Go back to the homepage</Link>
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