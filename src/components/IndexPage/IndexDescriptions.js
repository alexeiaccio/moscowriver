import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'
import { DescriptionWrapper, Column } from 'Styled'
import { RoundButtonWithImage, Link } from 'Components'
import { s4, getParagraphsFromProps } from 'Helpers'
import { log } from 'util';

const StyledLink = styled(Link)`
  color: ${key('colors.text')};
  text-decoration: none;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  width: 1100px;
`

const IndexColumn = Column.extend`
  padding: 0px;
  max-width: 48%;
  flex: 1 48%;
`

export const IndexDescriptions = ({data}) => {
  const paragraphs = data.body.filter(item => item.slice_type === 'text')

  return (
  <DescriptionWrapper>
    <Row>
    {paragraphs.map(({primary}) =>
      <IndexColumn key={s4()}>
        { getParagraphsFromProps(primary.text) }
      </IndexColumn>
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