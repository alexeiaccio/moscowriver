import styled, { keyframes } from 'styled-components'

const shiftBack = keyframes`
  0% {
    left: -225px;
  }
  100% {
    left: 0px;
  }
`

export const WaveWrapper = styled.div`
  position: absolute;
  width: 2250px;
  top: -50px;
  left: -225px;
  animation: ${shiftBack} 6s linear infinite;
  animation-play-state: paused;
  &:hover {
    animation-play-state: running;
  }
`