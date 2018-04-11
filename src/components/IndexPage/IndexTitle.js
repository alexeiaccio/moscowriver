import React from 'react'
import { TitleWrapper } from 'Styled'
import { WavedBack, Title } from 'Components'

export const IndexTitle = ({data}) => (
  <TitleWrapper>
    <WavedBack />
    <Title color='white' fontSize={0} lineHeight='64px' data={data} />
  </TitleWrapper>
)