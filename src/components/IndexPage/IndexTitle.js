import React from 'react'
import { TitleWrapper, StyledLink, Row} from 'Styled'
import { WavedBack, Title, ResultLinks } from 'Components'

export const IndexTitle = ({data, results}) => {
  return (
  <TitleWrapper>
    <WavedBack />
    <Row>
      <StyledLink to='/research/'>О проекте</StyledLink>
      <Title color='white' fontSize={0} lineHeight={0} data={data} />
      <ResultLinks {...{results}} />
    </Row>
  </TitleWrapper>
)}