import React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet"

import Typography from "typography"
import { TypographyStyle } from "react-typography"

const typography = new Typography()

class DefaultLayout extends React.Component {
  render() {

    return (
      <div>        
        <Link
          to="/"
          css={{
            display: `inline-block`,
            textDecoration: `none`,
          }}
        >
          <h1>
            Москва-река
          </h1>
        </Link>
        
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout
