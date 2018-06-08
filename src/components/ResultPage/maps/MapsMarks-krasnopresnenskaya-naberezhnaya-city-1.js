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
  background-size: cover;
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
      <Map back={MapsBack} />
      <Svg width="650" height="500" viewBox="0 0 650 500" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g id="Canvas" fill="none">
          {state.activeList === 1 &&
            <g id="maps_1" strokeLinecap="round" >
              <path id="mark_1-0" d="M0.00948114 0C-0.157186 22.8333 1.80948 74.9 11.0095 100.5C19.4606 124.016 29.532 143.212 43.4063 156.5M171.51 168.5C167.899 170.067 162.145 172.341 155.51 174.591M155.51 174.591C145.911 177.847 134.47 181.054 125.01 182C105.01 184 83.0095 180.5 60.0095 168.5C53.9118 165.319 48.4116 161.294 43.4063 156.5M155.51 174.591L128.51 106.5M43.4063 156.5L82.0095 103"
                transform="translate(116.49 176.5)" stroke="#EB5A59" strokeWidth={state.items[1][0] ? 8 : 2} />
              <path id="mark_1-1" d="M0 97L21 137.5M136.5 0L162.5 44" transform="translate(289.5 208.5)" stroke="#F0C41B" strokeWidth={state.items[1][1] ? 8 : 2} />
              <path id="mark_1-2" d="M0 109L180.5 0" transform="translate(396 32)" stroke="#53B36C" strokeWidth={state.items[1][2] ? 8 : 2} />
              <path id="mark_1-3" d="M0 0L58 103" transform="translate(471 78.5)" stroke="#F0C41B" strokeWidth={state.items[1][3] ? 8 : 2} />
              {/* Active */}
              <use xlinkHref={`#mark_1-${ getActive(1) || 0 }`} />
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-0" d="M26.5 308.5L15.5 310L11 271V262L0 186L12.5 184.5C13.5 188.833 16.2 199.8 19 209C22.5 220.5 44.5 246 64.5 256C84.5 266 109 268 123 266.5C137 265 173.5 249.5 188.5 242.5C203.5 235.5 266.5 201.5 280.5 191.5C291.7 183.5 325.833 156.167 341.5 143.5L507 0L514.5 10L497 28L405.5 105V109L363 147H359.5L328.5 172V179.5L314 187L286.5 209.5L223.5 246L190.5 262L188.5 258.5L187 260.5V268L168.5 275.5L165 269.5L80 299L26.5 306V308.5Z"
                transform="translate(119 88.5)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][0] ? 10 : 0} />
              <path id="mark_0-1" d="M9.60053 93L167.6 0L179.601 19.5L187.601 14.5L192.601 24.5L185.601 29L195.101 46L51.6006 130L53.6006 134L37.1006 142.5L35.6005 139.5C24.6005 141 13.1005 142.5 3.60048 126C-4.48216 111.962 2.60049 99 9.60053 93Z"
                transform="translate(198.9 129)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][1] ? 10 : 0} />
              <rect id="mark_0-2" width="34.2562" height="11.9267" transform="translate(346 328.355) rotate(-28.5171)" fill="#979797" stroke="#979797" strokeWidth={state.items[0][2] ? 10 : 0} />
              <path id="mark_0-3" d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 14.52 23.2232 16.8586 21.8961 18.7893L73.2202 101.131C73.8009 101.045 74.3952 101 75 101C81.6274 101 87 106.373 87 113C87 119.627 81.6274 125 75 125C68.3726 125 63 119.627 63 113C63 110.388 63.8348 107.97 65.2521 106L14.1202 23.8133C13.432 23.936 12.7235 24 12 24Z"
                transform="translate(410 228)" fill="#5D5957" stroke="#5D5957" strokeWidth={state.items[0][3] ? 10 : 0} />
              <path id="mark_0-4" d="M0 28.5L11.5 21L45.5 0L67 34.5L51.5 47L24.5 64L0 28.5Z" transform="translate(354 229)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][4] ? 10 : 0} />
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

