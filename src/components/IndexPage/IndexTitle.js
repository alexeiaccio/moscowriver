import React from 'react'
import { TitleWrapper, StyledLink, Row} from 'Styled'
import { WavedBack, Title } from 'Components'

export const IndexTitle = ({data}) => (
  <TitleWrapper>
    <WavedBack />
    <Row>
      <StyledLink to='/research/'>Исследование</StyledLink>
      <Title color='white' fontSize={0} lineHeight={0} data={data} />
      <StyledLink to='/shelepikhinskaya-naberezhnaya/'>Результаты</StyledLink>
    </Row>
  </TitleWrapper>
)