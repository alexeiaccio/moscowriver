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
      <Map back={MapsBack} />
      <Svg width="650" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={MapsBackBack} x="0" y="0" width="675" height="525" />
          </pattern>
        </defs>
        <g id="Canvas" fill="none">
          {state.activeList === 1 &&
            <g id="maps_1">
              {/* back */}
              <rect fill="url(#img1)" width="100%" height="100%" transform="translate(-10 -5)"/>
              {/* back */}
              <g id="mark_1-0">
                <circle id="Ellipse" cx="12.5" cy="12.5" r="12.5" transform="translate(123 72)" fill={state.items[1][0] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][0] ? 10 : 0} />
                <text id="1" transform="translate(123 72)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="10.2793" y="16.802">1</tspan>
                </text>
              </g>
              <g id="mark_1-1">
                <circle id="Ellipse_2" cx="12.5" cy="12.5" r="12.5" transform="translate(152 141)" fill={state.items[1][1] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][1] ? 10 : 0} />
                <text id="2" transform="translate(152 141)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">2</tspan>
                </text>
              </g>
              <g id="mark_1-2">
                <circle id="Ellipse_3" cx="12.5" cy="12.5" r="12.5" transform="translate(238 197)" fill={state.items[1][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][2] ? 10 : 0} />
                <text id="3" transform="translate(238 197)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.06641" y="16.802">3</tspan>
                </text>
              </g>
              <g id="mark_1-3">
                <circle id="Ellipse_4" cx="12.5" cy="12.5" r="12.5" transform="translate(309 172)" fill={state.items[1][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][3] ? 10 : 0} />
                <text id="4" transform="translate(309 172)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.48633" y="16.802">4</tspan>
                </text>
              </g>
              <g id="mark_1-4">
                <circle id="Ellipse_5" cx="12.5" cy="12.5" r="12.5" transform="translate(304 250)" fill={state.items[1][4] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][4] ? 10 : 0} />
                <text id="5" transform="translate(304 250)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">5</tspan>
                </text>
              </g>
              <g id="mark_1-5">
                <circle id="Ellipse_6" cx="12.5" cy="12.5" r="12.5" transform="translate(385 201)" fill={state.items[1][5] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][5] ? 10 : 0} />
                <text id="6" transform="translate(385 201)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">6</tspan>
                </text>
              </g>
              <g id="mark_1-6">
                <circle id="Ellipse_7" cx="12.5" cy="12.5" r="12.5" transform="translate(474 373)" fill={state.items[1][6] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][6] ? 10 : 0} />
                <text id="7" transform="translate(474 373)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.91406" y="16.802">7</tspan>
                </text>
                <circle id="Ellipse_8" cx="12.5" cy="12.5" r="12.5" transform="translate(135 234)" fill={state.items[1][6] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][6] ? 10 : 0} />
                <text id="7_2" transform="translate(135 234)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.91406" y="16.802">7</tspan>
                </text>
              </g>
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-1" d="M17 0H6L0 70L40 165.5L106.5 220.5L266 247.5L440 254L491 247.5V236.5C490.167 234.5 488 229.8 486 227C483.5 223.5 473.5 216.5 466.5 212C460.9 208.4 456.167 203.5 454.5 201.5L440 195.5C439.333 195.667 437.1 196.2 433.5 197C429.9 197.8 423.667 200.333 421 201.5C420.167 201.333 417.4 200.8 413 200C408.6 199.2 407.833 192.667 408 189.5C406 187.333 401.5 182.8 399.5 182C397.5 181.2 383.333 167.333 376.5 160.5C375 160 371.8 159.3 371 160.5C370 162 374.5 165 376.5 167.5C378.5 170 375.5 174 374.5 177C373.5 180 377 187.5 375.5 191C374 194.5 360.5 194 356 194.5C351.5 195 345 201.5 340.5 203C336.9 204.2 328.333 202.5 324.5 201.5C318.333 201.833 304.6 202 299 200C293.4 198 274.667 194.167 266 192.5L243.5 191.5C237 189.833 222.5 186.2 216.5 185C209 183.5 162 175 153 173C144 171 143 168.5 142.5 165.5C142 162.5 143.5 150.5 144.5 144C145.3 138.8 142.833 126.5 141.5 121C140.667 120 138.7 117.7 137.5 116.5C136 115 130.5 107 127.5 102.5C124.5 98 119 94.5 111 84C104.6 75.6 102.333 61.8333 102 56C97.5 51.5 87.3 41.8 82.5 39C76.5 35.5 64.5 35 56 33.5C47.5 32 45 25.5 40 23.5C36 21.9 27 22.8333 23 23.5L18.5 8.5H17V0Z"
                transform="translate(47 197.216)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][0] ? 10 : 0} />
              <path id="mark_0-0" d="M110.973 27.1828C130.179 30.594 160.235 44.7717 172.861 51.7007L153.121 83.6805C123.244 83.5028 60.9282 82.1881 50.6846 80.4825C40.441 78.7769 12.6267 46.3707 0 30.3808L8.00283 24.5179L26.6761 0L41.6147 9.06095C56.7312 13.6803 91.7658 23.7717 110.973 27.1828Z"
                transform="translate(277.046 159)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][0] ? 10 : 0} />
            </g>
          }
        </g>
      </Svg>
    </Fragment>
  )
}

export default MapsMarks

