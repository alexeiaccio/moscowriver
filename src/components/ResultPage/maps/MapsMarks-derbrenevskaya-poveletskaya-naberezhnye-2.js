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
  transition: all .2s ease-in-out;
`

const Map = styled.div`
  width: 650px;
  height: 500px;
  position: absolute;
  top: 0;
  right: 0;
  background: url(${({back}) =>  back}) no-repeat;
  transition: all .2s ease-in-out;
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
      <Map back={MapsBack}/>
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
                <circle id="Ellipse" cx="12.5" cy="12.5" r="12.5" transform="translate(329 24)" fill={state.items[0][0] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][0] ? 10 : 0} />
                <text id="1" transform="translate(329 24)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="10.2793" y="16.802">1</tspan>
                </text>
              </g>
              <g id="mark_1-1">
                <circle id="Ellipse_2" cx="12.5" cy="12.5" r="12.5" transform="translate(373 106)" fill={state.items[0][1] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][1] ? 10 : 0} />
                <text id="2" transform="translate(373 106)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">2</tspan>
                </text>
              </g>
              <g id="mark_1-2">
                <path id="Vector" d="M1.5 7.5L0 1L3.5 0L5 6.5L1.5 7.5Z" transform="translate(422 157)" fill="#979797" stroke="#979797" strokeWidth={state.items[0][2] ? 8 : 0} />
                <circle id="Ellipse_3" cx="12.5" cy="12.5" r="12.5" transform="translate(431 163)" fill={state.items[0][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][2] ? 10 : 0} />
                <text id="3" transform="translate(431 163)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.06641" y="16.802">3</tspan>
                </text>
              </g>
              <g id="mark_1-3">
                <path id="Vector_2" d="M7.5 0L0 13.5L4 16L11.5 2.5L7.5 0Z" transform="translate(408 242.5)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][3] ? 8 : 0} />
                <circle id="Ellipse_4" cx="12.5" cy="12.5" r="12.5" transform="translate(421 232)" fill={state.items[0][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][3] ? 10 : 0} />
                <text id="4" transform="translate(421 232)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.48633" y="16.802">4</tspan>
                </text>
              </g>
              <g id="mark_1-4">
                <circle id="Ellipse_5" cx="12.5" cy="12.5" r="12.5" transform="translate(378 291)" fill={state.items[0][4] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][4] ? 10 : 0} />
                <text id="5" transform="translate(378 291)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">5</tspan>
                </text>
              </g>
              <g id="mark_1-5">
                <path id="Vector_3" d="M5.5 0L0 4L2.5 5L6.5 2L5.5 0Z" transform="translate(350 301.5)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][5] ? 8 : 0} />
                <circle id="Ellipse_6" cx="12.5" cy="12.5" r="12.5" transform="translate(321 291)" fill={state.items[0][5] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][5] ? 10 : 0} />
                <text id="6" transform="translate(321 291)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">6</tspan>
                </text>
              </g>
              <g id="mark_1-6">
                <path id="Vector_4" d="M0 0.461538L4.5 17.9615L11 16.4615L9 8.96094L4.5 9.96094L3.5 5.46094L5.5 4.96094L4.5 1.46154L2.5 1.96154L2 0L0 0.461538Z"
                  transform="translate(281.5 468.539)" fill="#979797" stroke="#979797" strokeWidth={state.items[0][6] ? 8 : 0} />
                <circle id="Ellipse_7" cx="12.5" cy="12.5" r="12.5" transform="translate(289 448)" fill={state.items[0][6] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][6] ? 10 : 0} />
                <text id="7" transform="translate(289 448)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.91406" y="16.802">7</tspan>
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

