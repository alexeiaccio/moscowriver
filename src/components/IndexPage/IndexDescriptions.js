import React from 'react'
import { TitleWrapper } from 'Styled'
import { s4, SerializeHTML } from 'Helpers'


export const IndexDescriptions = ({data}) => {
  const paragraphs = data.body.filter(item => item.slice_type === 'text')
  //console.log(paragraphs)

  return (
  <div>
  {paragraphs.map(({primary}) =>
    <p key={s4()} dangerouslySetInnerHTML={{ __html: SerializeHTML(primary.text) }} />
  )}
  </div>
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