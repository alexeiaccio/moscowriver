import React from 'react'
import { CiteWrapper } from 'Styled'
import { Cite } from 'Components'

const Wrapper = CiteWrapper.extend`
  padding: 75px 0;
  text-align: center;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`

export default({data}) => (
  <Wrapper>
    <Cite color='blue' fontSize={1} data={data} />
  </Wrapper>
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