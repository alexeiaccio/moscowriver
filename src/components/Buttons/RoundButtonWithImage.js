import React from 'react'
import styled from 'styled-components'
import {
  RoundButton,
  ButtonBack,
  RoundButtonMiddle,
  RoundButtonMiddleBack,
  ButtonShade,
  ButtonText
} from 'Styled'

export const RoundButtonWithImage = ({to, url, text}) =>
  <RoundButton to={to}>
    <ButtonBack style={{backgroundImage: `url(${url})`}} />
    <ButtonShade />
    <ButtonText>{text}</ButtonText>
  </RoundButton>

const RoundButtonGif = RoundButtonMiddle.extend`
  top: auto;
  left: calc(50% - 960px/2);
  bottom: -85px;
  &> span {
    opacity: 0;
  }
  &:hover {
    bottom: -50px;
    &> span {
      opacity: 1;
    }
  }
`

const ButtonIcon = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center 25px;
`

export const RoundButtonWithGif = ({to, url, text, icon, ...other }) =>
  <RoundButtonGif to={to} {...other} >
    <RoundButtonMiddleBack style={{backgroundImage: `url(${url})`}} />
    <ButtonShade />
    <ButtonIcon url={icon} />
    <ButtonText>{text}</ButtonText>
  </RoundButtonGif>

