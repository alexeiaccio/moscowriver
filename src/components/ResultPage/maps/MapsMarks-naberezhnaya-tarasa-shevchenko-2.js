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
      <Svg width="650" height="500" viewBox="0 0 650 500" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={MapsBackBack} x="0" y="0" width="650" height="500" />
          </pattern>
        </defs>
        <g id="Canvas" fill="none">
          {state.activeList === 0 &&
            <g id="maps_0">
              {/* back */}
                <rect fill="url(#img1)" width="100%" height="100%"/>
              {/* back */}
              <path id="mark_1-18" d="M4.73546 0H0V77.4105H4.73546V0Z" transform="translate(428.439 45.3359) rotate(-26.9995)" fill="white"
                stroke="#979797"  strokeWidth={state.items[0][18] ? 8 : 2} />
              <g id="mark_1-0">
                <circle id="Ellipse" cx="12.5" cy="12.5" r="12.5" transform="translate(13 318)" fill={state.items[0][0] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][0] ? 10 : 0} />
                <text id="1" transform="translate(13 318)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="10.2793" y="16.802">1</tspan>
                </text>
              </g>
              <g id="mark_1-1">
                <circle id="Ellipse_2" cx="12.5" cy="12.5" r="12.5" transform="translate(21 359)" fill={state.items[0][1] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][1] ? 10 : 0} />
                <text id="2" transform="translate(21 359)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">2</tspan>
                </text>
              </g>
              <g id="mark_1-2">
                <circle id="Ellipse_3" cx="12.5" cy="12.5" r="12.5" transform="translate(47 343)" fill={state.items[0][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][2] ? 10 : 0} />
                <text id="3" transform="translate(47 343)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.06641" y="16.802">3</tspan>
                </text>
              </g>
              <g id="mark_1-3">
                <circle id="Ellipse_4" cx="12.5" cy="12.5" r="12.5" transform="translate(86 359)" fill={state.items[0][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][3] ? 10 : 0} />
                <text id="4" transform="translate(86 359)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.48633" y="16.802">4</tspan>
                </text>
              </g>
              <g id="mark_1-4">
                <circle id="Ellipse_5" cx="12.5" cy="12.5" r="12.5" transform="translate(64 303)" fill={state.items[0][4] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][4] ? 10 : 0} />
                <text id="5" transform="translate(64 303)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">5</tspan>
                </text>
              </g>
              <g id="mark_1-5">
                <circle id="Ellipse_6" cx="12.5" cy="12.5" r="12.5" transform="translate(84 327)" fill={state.items[0][5] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][5] ? 10 : 0} />
                <text id="6" transform="translate(84 327)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">6</tspan>
                </text>
              </g>
              <g id="mark_1-6">
                <circle id="Ellipse_7" cx="12.5" cy="12.5" r="12.5" transform="translate(140 323)" fill={state.items[0][6] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][6] ? 10 : 0} />
                <text id="7" transform="translate(140 323)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.91406" y="16.802">7</tspan>
                </text>
              </g>
              <g id="mark_1-7">
                <circle id="Ellipse_8" cx="12.5" cy="12.5" r="12.5" transform="translate(125 281)" fill={state.items[0][7] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][7] ? 10 : 0} />
                <text id="8" transform="translate(125 281)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.63867" y="16.802">8</tspan>
                </text>
              </g>
              <g id="mark_1-8">
                <circle id="Ellipse_9" cx="12.5" cy="12.5" r="12.5" transform="translate(191 292)" fill={state.items[0][8] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][8] ? 10 : 0} />
                <text id="9" transform="translate(191 292)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">9</tspan>
                </text>
              </g>
              <g id="mark_1-9">
                <circle id="Ellipse_10" cx="12.5" cy="12.5" r="12.5" transform="translate(162 254)" fill={state.items[0][9] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][9] ? 10 : 0} />
                <text id="10" transform="translate(162 254)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.27734" y="16.802">10</tspan>
                </text>
              </g>
              <g id="mark_1-10">
                <circle id="Ellipse_11" cx="12.5" cy="12.5" r="12.5" transform="translate(248 247)" fill={state.items[0][10] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][10] ? 10 : 0} />
                <text id="11" transform="translate(248 247)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.05859" y="16.802">11</tspan>
                </text>
              </g>
              <g id="mark_1-11">
                <circle id="Ellipse_12" cx="12.5" cy="12.5" r="12.5" transform="translate(218 217)" fill={state.items[0][11] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][11] ? 10 : 0} />
                <text id="12" transform="translate(218 217)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.83398" y="16.802">12</tspan>
                </text>
              </g>
              <g id="mark_1-12">
                <circle id="Ellipse_13" cx="12.5" cy="12.5" r="12.5" transform="translate(323 192)" fill={state.items[0][12] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][12] ? 10 : 0} />
                <text id="13" transform="translate(323 192)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.8457" y="16.802">13</tspan>
                </text>
              </g>
              <g id="mark_1-13">
                <circle id="Ellipse_14" cx="12.5" cy="12.5" r="12.5" transform="translate(343 160)" fill={state.items[0][13] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][13] ? 10 : 0} />
                <text id="14" transform="translate(343 160)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.26562" y="16.802">14</tspan>
                </text>
              </g>
              <g id="mark_1-14">
                <circle id="Ellipse_15" cx="12.5" cy="12.5" r="12.5" transform="translate(477 107)" fill={state.items[0][14] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][14] ? 10 : 0} />
                <text id="15" transform="translate(477 107)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.83398" y="16.802">15</tspan>
                </text>
              </g>
              <g id="mark_1-15">
                <circle id="Ellipse_16" cx="12.5" cy="12.5" r="12.5" transform="translate(553 85)" fill={state.items[0][15] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][15] ? 10 : 0} />
                <text id="16" transform="translate(553 85)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.57617" y="16.802">16</tspan>
                </text>
              </g>
              <g id="mark_1-16">
                <circle id="Ellipse_17" cx="12.5" cy="12.5" r="12.5" transform="translate(594 152)" fill={state.items[0][16] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][16] ? 10 : 0} />
                <text id="17" transform="translate(594 152)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.69336" y="16.802">17</tspan>
                </text>
              </g>
              <g id="mark_1-17">
                <circle id="Ellipse_18" cx="12.5" cy="12.5" r="12.5" transform="translate(610 229)" fill={state.items[0][17] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][17] ? 10 : 0} />
                <text id="18" transform="translate(610 229)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.41797" y="16.802">18</tspan>
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

