import React from 'react'
import {StyledFooter, Email, Logo, Row} from 'Styled'
import { getImageFromProp, s4} from 'Helpers'
import patternWaves from '../../assets/PatternWaves.svg'

export default ({data}) => {
  const email = data.email.url
  const logos = getImageFromProp(data.logos)

  return (
    <StyledFooter>
      <Email>
        Напишите нам: <a href={email} target='_blank'>{ email.replace('mailto:', '') }</a>
      </Email>
      <Row>
      {logos.map(logo =>
        <Logo key={s4()} src={logo.option(patternWaves)}/>
      )}
      </Row>
    </StyledFooter>
  )
}

export const query = graphql`
  fragment FooterFragment on PrismicDocument {
    data {
      email {
        url
      }
      logos {
        image {
          url
        }
      }
    }
  }
`