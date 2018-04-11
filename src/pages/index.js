import React from 'react'
import Link from 'gatsby-link'
import { ScrollProvider } from 'react-skroll'
import { IndexPage } from 'Components'

export default ({ data }) => {
  return (
    <ScrollProvider autoFrame={true} autoScroll={true} >
      <IndexPage data={data}/>
    </ScrollProvider>
  )
}

export const query = graphql`
  query IndexQuery {
    allPrismicDocument(filter: {type: {eq: "homepage"}}) {
      edges {
        node {
          ...TitleFragment
          ...CiteFragment
          ...VideoFragment
          ...HeaderFragment
        }
      }
    }
  }
`