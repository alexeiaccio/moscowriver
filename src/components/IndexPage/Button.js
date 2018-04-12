import React from 'react'
import {
  RoundButton,
  ButtonBack,
  ButtonShade,
  ButtonText
} from 'Styled'

export const Button = ({to, url, text}) =>
  <RoundButton to={to}>
    <ButtonBack style={{backgroundImage: `url(${url})`}} />
    <ButtonShade />
    <ButtonText>{text}</ButtonText>
  </RoundButton>

