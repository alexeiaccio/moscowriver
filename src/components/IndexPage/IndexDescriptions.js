import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'
import { DescriptionWrapper, Column, Row } from 'Styled'
import { RoundButtonWithImage, Link } from 'Components'
import { s4, getParagraphsFromProps } from 'Helpers'
import { log } from 'util';

const StyledLink = styled(Link)`
  color: ${key('colors.text')};
  text-decoration: none;
`

export const IndexDescriptions = ({data}) => {
  const paragraphs = data.body.filter(item => item.slice_type === 'text')

  return (
  <DescriptionWrapper>
    <Row>
    {paragraphs.map(({primary}) =>{
      let to = primary.text[0].spans[0].data.url || '/' + primary.text[0].spans[0].data.uid
      return <Column key={s4()}>
        <StyledLink to={to} >
          { getParagraphsFromProps(primary.text) }
        </StyledLink>
        <RoundButtonWithImage to={to} url={primary.image.url} text={primary.linktext[0].text} />
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