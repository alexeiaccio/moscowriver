import React from 'react'
import Link from 'gatsby-link'
import { ScrollProvider } from 'react-skroll'
import { ScrollWrapper } from 'Styled'
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
    allPrismicDocument(filter: {type: {eq: "homepage"}}) {
      edges {
        node {
          ...TitleFragment
          ...CiteFragment
          ...VideoFragment
          ...HeaderFragment
          ...FooterFragment
        }
      }
    }
  }
`