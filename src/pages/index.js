import React from 'react'
import Link from 'gatsby-link'
import { ScrollProvider } from 'react-skroll'
import Scroll from '../components/Scroll'

const IndexPage = ({ data }) => {
  return (
    <ScrollProvider autoFrame={true} autoScroll={true} >
      <Scroll data={data}/>
    </ScrollProvider>
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