import React from 'react'
import { TitleWrapper, WaveWrapper, StyledLink, Row } from 'Styled'
import { WavePattern, Title } from 'Components'

const Header = TitleWrapper.extend`
  height: 100px;
  align-items: flex-start;
  padding-top: 20px;
`

const Back = WaveWrapper.extend`
  transform: translateY(-140px);
`

export default ({data, layout}) => (
  <Header>
    <Back>
      <WavePattern />
    </Back>
    <Row>
      <StyledLink to='/'>На главную</StyledLink>
      <Title color='white' fontSize={1} lineHeight='40px' data={data}/>
      <StyledLink to='/shelepikhinskaya-naberezhnaya/'>Результаты</StyledLink>
    </Row>
  </Header>
)

export const query = graphql`
  fragment ResearchHeaderFragment on PrismicDocument {
    data {
      body {
        primary {
          title {
            text
          }
        }
      }
    }
  }
`