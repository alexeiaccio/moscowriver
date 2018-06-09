import React from 'react'

import { HeaderWrapper, StyledLink, Row } from 'Styled'
import { WavedBack, Title } from 'Components'

import { default as HeaderTitle } from './HeaderTitle'
import ResultLinks from './ResultLinks'

export default ({data, layout, results}) => {
  return (
  <HeaderWrapper>
    <WavedBack />
    <Row>
      <HeaderTitle {...{data}}/>
      <StyledLink to='/about/'>О проекте</StyledLink>
      <ResultLinks {...{results}} />
    </Row>
  </HeaderWrapper>
)}