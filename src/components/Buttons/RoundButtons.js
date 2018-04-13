import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'
import ArrowIconBlue from '../../assets/ArrowIconBlue.svg'
import IconMore from '../../assets/IconMore.svg'

import {
  RoundButtonSmall,
  ButtonText
} from 'Styled'

const ButtonTemplate = styled(RoundButtonSmall)`
  background-color: ${props => key(props.color)};
  background-repeat: no-repeat;
  transition: all .4s ease-in-out;
  &:hover {
    background-color: ${key(['colors', 'gray', 3])};
  }
`

const ButtonBack = styled(ButtonTemplate)`
  top: -50px;
  background-image: url(${ArrowIconBlue});
  background-position: center 60px;
  &:hover {
    top: -25px;
    background-position: center 50px;
  }
`

const ButtonForward = styled(ButtonTemplate)`
  top: auto;
  bottom: -50px;
  background-image: url(${IconMore});
  background-position: center 25px;
  &> span {
    opacity: 0;
  }
  &:hover {
    bottom: -25px;
    background-color: ${key('colors.bright.blue')};
    &> span {
      opacity: 1;
    }
  }
`

export const RoundButtonBack = ({to, color}) => (
    <ButtonBack to={to} color={color} />
)
export const RoundButtonForward = ({to, color, text}) => (
    <ButtonForward to={to} color={color}>
      <ButtonText>{text}</ButtonText>
    </ButtonForward>
)