import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

const Svg = styled.svg`
  min-width: 650px;
  height: 500px;
  z-index: 1;
  @media (max-width: 1199px) {
    margin-left: -110px;
  }
  transform: scale(1.5) translate(20px, -70px);
`

const Map = styled.div`
  width: 975px;
  height: 750px;
  position: absolute;
  top: 0;
  right: 0;
  background: url(${({back}) =>  back}) no-repeat;
  transform: translate(193px,-228px);
`

const MapsMarks = ({state, uid}) => {
  const MapsBack = require(`./maps-${uid}.png`)
  const MapsBackBack = require(`./maps-${uid}-back.png`)
  const getActive = (active) =>
  state.items[active]
    .map((item, i) => item && i)
    .filter(item => item)
    .join()
  return (
    <Fragment>
      <Map back={MapsBack} />
      <Svg width="650" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={MapsBackBack} x="0" y="0" width="650" height="500" />
          </pattern>
        </defs>
        <g id="Canvas" fill="none">
          {state.activeList === 0 &&
            <g id="maps_1">
              {/* back */}
              <rect fill="url(#img1)" width="100%" height="100%"/>
              {/* back */}
              <g id="mark_1-0">
                <path id="Vector" d="M44.6784 64.3523L49.4269 76.2881L50.4341 76.0723L51.945 75.7847L49.5708 61.62C47.9879 52.5604 49.9305 43.1412 55.0386 35.4477L78.8527 1.36615L77.126 -8.7771e-06L64.7513 16.897L51.1536 35.4477C45.0382 42.7817 36.3327 47.5272 26.8358 48.6777L-5.48904e-07 52.7761L0.503622 55.796L22.9508 52.3446C32.1598 50.9785 41.0811 55.8679 44.6784 64.3523Z"
                  transform="translate(113 308)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][0] ? 10 : 0} />
                <circle id="Ellipse" cx="12.5" cy="12.5" r="12.5" transform="translate(136 320)"  fill={state.items[0][0] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][0] ? 10 : 0} />
                <text id="1" transform="translate(136 320)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="10.2793" y="16.802">1</tspan>
                </text>
              </g>
              <g id="mark_1-1">
                <path id="Vector_2" d="M-5.48904e-07 18.0474L3.88508 17.616C4.10092 16.0341 5.10816 14.5961 6.61903 13.8771C8.99324 12.7266 11.8711 13.8052 12.9503 16.1779L14.7489 15.8904L50.7938 9.92246L52.5205 9.56295C52.3766 7.47779 53.5997 5.53647 55.5423 4.74555C57.9884 3.73892 60.8663 4.96122 61.8016 7.40589L63.5283 7.04638L64.8233 6.7588L91.0836 -8.7771e-06L91.6591 2.15705L65.3989 9.13156L65.4708 9.49107L49.8585 13.0143L49.6427 12.2953L37.3399 14.5242L13.31 17.8317L13.0222 19.1978C12.8783 19.7731 12.3747 20.2045 11.7991 20.2764L0.575566 21.7863L-5.48904e-07 18.0474Z"
                  transform="translate(136 378)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][1] ? 10 : 0} />
                <circle id="Ellipse_2" cx="12.5" cy="12.5" r="12.5" transform="translate(182 395)"  fill={state.items[0][1] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][1] ? 10 : 0} />
                <text id="2" transform="translate(182 395)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">2</tspan>
                </text>
              </g>
              <g id="mark_1-2">
                <path id="Vector_3" d="M39.2763 0H4.39054e-06V24.019H39.2763V0Z" transform="matrix(0.861835 -0.50717 0.50763 0.861564 331 309.92)"
                  fill="#979797" stroke="#979797" strokeWidth={state.items[0][2] ? 10 : 0} />
                <circle id="Ellipse_3" cx="12.5" cy="12.5" r="12.5" transform="translate(325 275)"  fill={state.items[0][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][2] ? 10 : 0} />
                <text id="3" transform="translate(325 275)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.06641" y="16.802">3</tspan>
                </text>
              </g>
              <g id="mark_1-3">
                <path id="Vector_4" d="M21.6523 0H8.78109e-06V4.60245H21.6523V0Z" transform="matrix(0.862135 -0.50667 0.50713 0.861865 379 307.971)"
                  fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][3] ? 10 : 0} />
                <circle id="Ellipse_4" cx="12.5" cy="12.5" r="12.5" transform="translate(393 305)"  fill={state.items[0][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][3] ? 10 : 0} />
                <text id="4" transform="translate(393 305)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.48633" y="16.802">4</tspan>
                </text>
              </g>
            </g>
          }
        </g>
      </Svg>
    </Fragment>
  )
}

export default MapsMarks

