import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import baseStyles from './base-styles'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import favicon from './favicon.png'

const TemplateWrapper = ({ children, data }) => {
  const {
    seotitle,
    seodescription,
    seokeywords,
    seoimage
  } = data.homepage.data
    
  return (
    <div id='menu-wrapper'>
      <Helmet
        defaultTitle={seotitle}
        titleTemplate={`${seotitle} | %s`}
        meta={[
          { name: 'description', content: seodescription },
          { name: 'keywords', content: seokeywords },
          { name: 'robots', content: 'all' },
          { name: 'apple-mobile-web-app-title', content: seotitle }
        ]}
      >
        <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
      </Helmet>
      {baseStyles()}
      <ThemeProvider theme={theme}>
        {children()}
      </ThemeProvider>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
query LayoutQuery {
  homepage: prismicDocument(type: {eq: "homepage"}) {
    data {
      seotitle
      seodescription
      seokeywords
      seoimage {
        url
      }
    }
  }
}`
