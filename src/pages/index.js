import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { IndexPage } from 'Components'

class Index extends React.Component {
   render() {
    const data = this.props.data
    const {
      seotitle,
      seodescription,
      seokeywords,
    } = data.homepage.data

    return (
      <Fragment>
        <Helmet
          title={seotitle}
          meta={[
            { name: 'description', content: seodescription },
            { name: 'keywords', content: seokeywords },
          ]}
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
      }
    }
    quotes: allPrismicDocument(filter: {type: {eq: "quote"}}) {
      edges {
        node {
          ...QuotesFragment
        }
      }
    }
    result: allPrismicDocument(filter: {type: {eq: "result"}}) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`