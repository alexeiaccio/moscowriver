import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import { RichText } from 'prismic-reactjs'

import SmallWave from '../../assets/SmallWave.svg'

const linkResolver = doc => (
	doc.type !== 'homepage'
	? `#${doc.uid}`
	: '/'
)

const shiftBack = keyframes`
  0% {
    left: -14px;
  }
  100% {
    left: 0px;
  }
`

const Description = styled.div`
  width: ${({width}) =>  width}px;
  padding: ${key(['space', 7])}px ${key(['space', 9])}px;
  margin-bottom: ${key(['space', 10])}px;
  background-color: rgba(0,0,0,.5);
  color: ${key('colors.white')};
  font-size: ${({size}) => key(['fontSizes', size])}px;
  line-height: ${({size}) => key(['lineHeights', size - 2])};
  font-weight: ${key('fontWeights.medium')};
  text-align: center;
  border: 10px solid ${key('colors.bright.blue')};
  & a {
    position: relative;
    color: ${key('colors.white')};
    font-weight: ${key('fontWeights.semibold')};
    text-decoration: none;
    transition: all .2s ease-in-out;
    &:hover {
      color: ${key('colors.bright.blue')};
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 28px;
      display: block;
      height: 7px;
      background: url(${SmallWave}) repeat-x;
      background-size: 15px 7px;
      animation: ${shiftBack} .4s linear infinite;
      animation-play-state: paused;
    }
    &:hover::after {
      animation-play-state: running;
    }
  }
`

export default ({width, size, data: { description }}) => (
  <Description width={width} size={size} >
  { RichText.render(description, linkResolver) }
  </Description>
)