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
      return <Column key={s4()}>
        { getParagraphsFromProps(primary.text) }
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
            text
          }
        }
      }
    }
  }
`