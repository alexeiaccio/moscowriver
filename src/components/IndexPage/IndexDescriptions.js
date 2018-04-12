import React from 'react'
import { DescriptionWrapper, Column, Row } from 'Styled'
import { Button } from './Button'
import { s4, SerializeHTML } from 'Helpers'


export const IndexDescriptions = ({data}) => {
  const paragraphs = data.body.filter(item => item.slice_type === 'text')
  console.log(paragraphs)

  return (
  <DescriptionWrapper>
    <Row>
    {paragraphs.map(({primary}) =>{
      let to = primary.text[0].spans[0].data.url || '/' + primary.text[0].spans[0].data.uid
      return <Column key={s4()}>
        <p dangerouslySetInnerHTML={{ __html: SerializeHTML(primary.text) }} />
        <Button to={to} url={primary.image.url} text={primary.linktext[0].text} />
      </Column>}
    )}
    </Row>
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
          image {
            url
          }
          linktext {
            text
          }
        }
      }
    }
  }
`