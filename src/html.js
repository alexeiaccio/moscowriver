import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

import PodkovaRegularWoff from './layouts/fonts/subset-Podkova-Regular.woff'
import PodkovaMediumWoff from './layouts/fonts/subset-Podkova-Medium.woff'
import MontserratRegularWoff from './layouts/fonts/subset-Montserrat-Regular.woff'
import MontserratMediumWoff from './layouts/fonts/subset-Montserrat-Medium.woff'
import MontserratSemiBoldWoff from './layouts/fonts/subset-Montserrat-SemiBold.woff'

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=1200"
          />
          <link rel="preload" href={PodkovaRegularWoff} as="font" />
          <link rel="preload" href={PodkovaMediumWoff} as="font" />
          <link rel="preload" href={MontserratRegularWoff} as="font" />
          <link rel="preload" href={MontserratMediumWoff} as="font" />
          <link rel="preload" href={MontserratSemiBoldWoff} as="font" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
