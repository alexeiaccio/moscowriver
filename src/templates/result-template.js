import React from 'react'
import Link from 'gatsby-link'
import Title from '../components/Title'
import Image from '../components/Image'

const ResultTemplate = ({ data }) => {
  const node = data.allPrismicDocument.edges[0].node
  return (
    <div>
    <Title data={node.data} />
    <Image data={node.data} />
    <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ResultTemplate

export const query = graphql`
  query ResultTemplateQuery {
    allPrismicDocument(filter: {type: {eq: "result"}}) {
      edges {
        node {
          ...TitleFragment
          ...ImageFragment
        }
      }
    }
  }
`