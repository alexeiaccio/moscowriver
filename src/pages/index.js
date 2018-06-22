import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { IndexPage, SEO } from 'Components'

class Index extends React.Component {
   render() {
    const data = this.props.data
    const {
      seotitle,
      seodescription,
      seokeywords,
      seoimage
    } = data.homepage.data

    return (
      <Fragment>
        <SEO
          uid={null}
          title={null}
          description={seodescription}
          keywords={seokeywords}
          image={seoimage.url}
        />
       <IndexPage data={data}/>
      </Fragment>
     )
   }
}

export default Index

export const query = graphql`
  query IndexQuery {
    homepage: prismicDocument(type: {eq: "homepage"}) {
      ...TitleFragment
      ...CiteFragment
      ...VideoFragment
      ...IndexDescriptionsFragment
      ...IndexButtonsFragment
      ...HeaderFragment
      ...FooterFragment
      data {
        seotitle
        seodescription
        seokeywords
        seoimage {
          url
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
    results: prismicDocument(type: {eq: "menu"}) {
      data {
        body {
          primary {
            linkname
            uid {
              uid
            }
          }
        }
      }
    }
  }
`