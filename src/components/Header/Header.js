import React from 'react'
import { HeaderWrapper, StyledLink, Row } from 'Styled'
import { WavedBack, Title } from 'Components'
import { default as HeaderTitle } from './HeaderTitle'

export default ({data}) => (
  <HeaderWrapper>
    <WavedBack />
    <Row>
      <HeaderTitle data={data} />
      <StyledLink to='/research/'>Исследование</StyledLink>
      <StyledLink to='/shelepikhinskaya-naberezhnaya/'>Результаты</StyledLink>
    </Row>

  </HeaderWrapper>
)