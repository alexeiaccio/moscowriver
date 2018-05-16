import React, { Fragment, Component } from 'react'
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

class ThanksPage extends Component {
  constructor(props) {
    super(props)
    this.state={
      data: props.data.homepage.data,
      where: ''
    }
  }

  componentDidMount = () => {
    this.setState({
      where: window.location.search.replace('?', '')
    })
  }

  render() {
    return (
      <Fragment>
        <Header data={this.state.data} />
        <main>
          <SectionThree id='three'>
            <H2>Спасибо!</H2>
            <Paragraph>
            { this.state.where === 'subscribe' &&
              'Что подписались на обновления нашего сайта!'
            }
            { this.state.where === 'result' &&
              'Что оставили свой отзыв!'
            }
            </Paragraph>
          </SectionThree>
        </main>
        <Footer data={this.state.data} />
      </Fragment>
    )
  }
}

export default ThanksPage

export const query = graphql`
  query ThanksQuery {
    homepage: prismicDocument(type: {eq: "homepage"}) {
      ...HeaderFragment
      ...FooterFragment
    }
  }
`