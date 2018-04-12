import React from 'react'
import { DescriptionWrapper, Column } from 'Styled'
import { s4, SerializeHTML } from 'Helpers'


export const IndexDescriptions = ({data}) => {
  const paragraphs = data.body.filter(item => item.slice_type === 'text')
  //console.log(paragraphs)

  return (
  <DescriptionWrapper>
  {paragraphs.map(({primary}) =>
    <Column key={s4()} dangerouslySetInnerHTML={{ __html: SerializeHTML(primary.text) }} />
  )}
  </DescriptionWrapper>
)}

export const query = graphql`
  fragment IndexDescriptionsFragment on PrismicDocument {
    data {
      body {
        slice_type
        primary {
          text {
            type
            text
            spans {
              start
              end
              type
              data {
                url
                uid
              }
            }
          }
        }
      }
    }
  }
`