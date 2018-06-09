import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import baseStyles from './base-styles'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import favicon from './favicon.png'

const TemplateWrapper = ({ children }) => (
  <div id='menu-wrapper'>
    <Helmet
      defaultTitle='390 взглядов на Москву-реку'
      titleTemplate='390 взглядов на Москву-реку | %s'
      meta={[
        { name: 'description', content: 'Исследование «390 взглядов на Москву-реку»' },
        { name: 'keywords', content: 'Москва, река' },
        { name: 'robots', content: 'all' },
        { name: 'apple-mobile-web-app-title', content: '390 взглядов на Москву-реку' }
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

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
