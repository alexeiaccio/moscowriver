import React from 'react'
import Link from 'gatsby-link'

class DefaultLayout extends React.Component {
  render() {

    return (
      <div>
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
        </div>
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout
