import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import {
  Header,
  Footer,
} from 'Components'
import {
  H2,
  SectionThree,
} from 'Styled'

const Paragraph =  styled.div`
  color: ${key('colors.text')};
  padding-top: ${key(['space', 3])}px;
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 4])};
`

export default ({ data }) => {
  const node = data.homepage.data
  const where = location.search.replace('?', '')

  return (
    <Fragment>
      <Header data={node} />
      <main>
        <SectionThree id='three'>
          <H2>Спасибо!</H2>
          <Paragraph>
          { where === 'subscribe' &&
            'Что подписались на обновления нашего сайта!'
          }
          { where === 'result' &&
            'Что оставили свой отзыв!'
          }
          </Paragraph>
        </SectionThree>
      </main>
      <Footer data={node} />
    </Fragment>
  )
}

export const query = graphql`
  query ThanksQuery {
    homepage: prismicDocument(type: {eq: "homepage"}) {
      ...HeaderFragment
      ...FooterFragment
    }
  }
`