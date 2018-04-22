import React from 'react'
import { CiteWrapper } from 'Styled'
import { key } from 'styled-theme'
import { Cite } from 'Components'

const Wrapper = CiteWrapper.extend`
  width: 100%;
  padding: ${key(['space', 9])}px 0;
  text-align: center;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`

const FootWrapper = CiteWrapper.extend`
  width: 100%;
  padding: ${key(['space', 11])}px 0;
  text-align: center;
  background: transparent;
`

export const HeadCite = ({data}) => (
  <Wrapper>
    <Cite color='bright.blue' fontSize={1} data={data} />
  </Wrapper>
)

export const FootCite = ({data}) => (
  <FootWrapper>
    <Cite color='bright.blue' fontSize={1} data={data} />
  </FootWrapper>
)

export const query = graphql`
  fragment ResearchCiteFragment on PrismicDocument {
    data {
      body {
        primary {
          cite {
            text
          }
        }
      }
    }
  }
`