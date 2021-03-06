import React, { Children, cloneElement } from 'react'
import styled, { keyframes } from 'styled-components'
import LazyLoad from 'react-lazyload'

const Appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  25% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const style = {
  animation: `${Appear} .8s ease-in-out`
}

export const Lazy = ({ children, height, offset, throttle }) => (
  <LazyLoad throttle={throttle || 200} height={height || 200} offset={offset || -100} once>
  {Children.map(children, child =>
    cloneElement(child, { style: style }))
  }
  </LazyLoad>
)