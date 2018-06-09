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
  const getActive = (active) =>
  state.items[active]
    .map((item, i) => item && i)
    .filter(item => item)
    .join()
  return (
    <Fragment>
      <Map back={MapsBack}/>
      <Svg width="650" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Canvas" fill="none">
          {state.activeList === 1 &&
            <g id="maps_1" strokeLinecap="round" >
              <path id="mark_1-0" d="M0 0C10.2542 10.524 26.7416 28.0968 41.2565 45C53.6362 59.4167 64.0811 73.8463 68.5 82.5C78.5 102.5 94.9575 134.109 97.5 162.5C100.5 196 97.5 220 78.5 246C63.3 266.8 29.8333 289.333 15 298"
                transform="translate(325.5 10.5)" stroke="#53B36C" strokeWidth={state.items[1][0] ? 8 : 2} />
              <path id="mark_1-1" d="M122 0L38 33.5L5 60L21.5 82.5C28.8333 96.6667 44.3 128.1 47.5 140.5C51.5 156 53.5 159.5 54 180C54.5 200.5 52.7237 212.237 45.5 231.5C41 243.5 28 260.5 15 270.5L0 260.5"
                transform="translate(367.5 4.5)" stroke="#C4549A" strokeWidth={state.items[1][1] ? 8 : 2} />
              <circle id="mark_1-2" cx="7.5" cy="7.5" r="7.5" transform="translate(380 270)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][2] ? 10 : 0} />
              {/* Active */}
              <use xlinkHref={`#mark_1-${ getActive(1) || 0 }`} />
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-0" d="M120.5 54.5L34.5 0L20 31L0 84.5L78 142.5C87.5 134 98.602 123.5 106 109C118.5 84.5 117.5 71 120.5 54.5Z"
                transform="translate(303 133)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][0] ? 10 : 0} />
              <circle id="mark_0-1" cx="7.5" cy="7.5" r="7.5" transform="translate(365 287)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][1] ? 10 : 0} />
              <circle id="mark_0-2" cx="7.5" cy="7.5" r="7.5" transform="translate(380 270)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][2] ? 10 : 0} />
              <circle id="mark_0-3" cx="7.5" cy="7.5" r="7.5" transform="translate(374 61)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][3] ? 10 : 0} />
              {/* Active */}
              <use xlinkHref={`#mark_0-${ getActive(0) || 0 }`} />
            </g>
          }
        </g>
      </Svg>
    </Fragment>
  )
}

export default MapsMarks

