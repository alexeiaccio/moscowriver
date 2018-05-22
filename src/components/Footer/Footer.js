import React from 'react'
import {StyledFooter, Email, Logo, Row, Copyright, Accio} from 'Styled'
import { getImageFromProps, s4} from 'Helpers'
import patternWaves from '../../assets/PatternWaves.svg'

export default ({data}) => {
  const email = data.email.url
  const logos = getImageFromProps(data.logos)

  return (
    <StyledFooter>
      <Email>
        Напишите нам: <a href={email} target='_blank'>{ email.replace('mailto:', '') }</a>
      </Email>
      <Row>
      {logos.map((logo, i) =>
        <Logo key={s4()} href={i === 0 ? 'http://orchestra-design.com/' : 'http://meganom.moscow/'} src={logo.option(patternWaves)} target='_blank' rel='noreferrer' />
      )}
      </Row>
      <Copyright color='white' >Разработка&ensp;<Accio href='http://www.accio.pro/' target='_blank' rel='noreferrer' color='white' /></Copyright>
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