import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import baseStyles from './base-styles'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="390 взглядов на Москву-реку"
      meta={[
        { name: 'description', content: 'Исследование «390 взглядов на Москву-реку»' },
        { name: 'keywords', content: 'Москва, река' },
      ]}
      />
    {baseStyles()}
    {/* <Header /> */}
    <ThemeProvider theme={theme}>
      {children()}
    </ThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
