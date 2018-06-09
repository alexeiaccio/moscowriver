import React from 'react'
import { CiteWrapper } from 'Styled'
import { Cite } from 'Components'

export const IndexCite = ({data}) => (
  <CiteWrapper>
    <Cite color='blue' fontSize={2} data={data} />
  </CiteWrapper>
)