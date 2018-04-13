import React from 'react'
import Link from 'gatsby-link'
import { IndexPage } from 'Components'

class Index extends React.Component {
   render() {
    const data = this.props.data

    return (
       <IndexPage data={data}/>
     )
   }
}

export default Index

export const query = graphql`
  query IndexQuery {
    homepage: allPrismicDocument(filter: {type: {eq: "homepage"}}) {
      edges {
        node {
          ...TitleFragment
          ...CiteFragment
          ...VideoFragment
          ...IndexDescriptionsFragment
          ...IndexButtonsFragment
          ...HeaderFragment
          ...FooterFragment
        }
      }
    }
    quotes: allPrismicDocument(filter: {type: {eq: "quote"}}) {
      edges {
        node {
          ...QuotesFragment
        }
      }
    }
  }
`