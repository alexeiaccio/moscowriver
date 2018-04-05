import React from 'react'
import Link from 'gatsby-link'
import Title from '../components/Title'
import Cite from '../components/Cite'
import Video from '../components/Video'

const IndexPage = ({ data }) => {
  const node = data.allPrismicDocument.edges[0].node
  return (
    <div>
      <Title data={node.data} />
      <Cite data={node.data} />
      <Video data={node.data} />
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allPrismicDocument(filter: {type: {eq: "homepage"}}) {
      edges {
        node {
          ...TitleFragment
          ...CiteFragment
          ...VideoFragment
        }
      }
    }
  }
`