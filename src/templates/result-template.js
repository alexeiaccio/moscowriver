import React from 'react'
import Link from 'gatsby-link'
import Title from '../components/Title'

const resultTemplate = ({ data }) => {
  const node = data.allPrismicDocument.edges[0].node
  return (
    <div>
    <Title data={node.data} />
    <Link to="/">Go to Home</Link>
    </div>
  )
}

export default resultTemplate

export const query = graphql`
  query resultTemplateQuery {
    allPrismicDocument(filter: {type: {eq: "result"}}) {
      edges {
        node {
          ...TitleFragment
        }
      }
    }
  }
`