import React from 'react'
import styled from 'styled-components'
import {
  RoundButton,
  ButtonBack,
  ButtonShade,
  ButtonText
} from 'Styled'

export const RoundButtonWithImage = ({to, url, text}) =>
  <RoundButton to={to}>
    <ButtonBack style={{backgroundImage: `url(${url})`}} />
    <ButtonShade />
    <ButtonText>{text}</ButtonText>
  </RoundButton>

const RoundButtonGif = RoundButton.extend`
  top: auto;
  left: calc(50% - 960px/2);
  bottom: -75px;
  &:hover {
    bottom: -35px;
  }
`

const ButtonIcon = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center 50px;
`

export const RoundButtonWithGif = ({to, url, text, icon}) =>
  <RoundButtonGif to={to}>
    <ButtonBack style={{backgroundImage: `url(${url})`}} />
    <ButtonShade />
    <ButtonIcon url={icon} />
    <ButtonText>{text}</ButtonText>
  </RoundButtonGif>

