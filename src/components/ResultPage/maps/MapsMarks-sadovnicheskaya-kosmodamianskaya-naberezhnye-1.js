import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

const Svg = styled.svg`
  width: 650px;
  height: 750px;
  z-index: 1;
  @media (max-width: 1199px) {
    margin-left: -150px;
  }
  transition: all .2s ease-in-out;
  transform: ${({second, third}) => second ? 'translateY(-125px)' : third ? 'translateY(62px)' : 'translateY(125px)'};
`

const Map = styled.div`
  width: 650px;
  height: 750px;
  position: absolute;
  top: 0;
  right: 0;
  background: url(${({back}) =>  back}) no-repeat;
  transition: all .2s ease-in-out;
  transform: ${({second, third}) => second ? 'translateY(-250px)' : third && 'translateY(-58px)'};
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
      <Map back={MapsBack} second={state.items[0][3] || state.items[1][1] || state.items[2][1] ? true : false} third={state.items[2][4] ? true : false} />
      <Svg
        second={state.items[0][3] || state.items[1][1] || state.items[2][1] ? true : false} third={state.items[2][4]}
        width="650" height="750" viewBox="0 0 650 750" version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Canvas" fill="none">
          {state.activeList === 2 &&
            <g id="maps_2" strokeLinecap="round">
              <circle id="mark_2-0" cx="7.5" cy="7.5" r="7.5" transform="translate(420 374)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[2][0] ? 10 : 0} />
              <circle id="mark_2-1" cx="7.5" cy="7.5" r="7.5" transform="translate(345 581)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[2][1] ? 10 : 0} />
              <circle id="mark_2-2" cx="7.5" cy="7.5" r="7.5" transform="translate(295 444)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[2][2] ? 10 : 0} />
              <circle id="mark_2-3" cx="7.5" cy="7.5" r="7.5" transform="translate(368 212)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[2][3] ? 10 : 0} />
              <path id="mark_2-4" d="M0 0C9.83333 10.3333 31.5 35 39.5 51C49.5 71 71 112 73.5 123C76 134 101.5 206 106.5 221C111.5 236 135.5 338.5 138 348.5C140 356.5 159.167 442.833 168.5 485"
                transform="translate(207.5 70)" stroke="#C4549A" strokeWidth={state.items[2][4] ? 8 : 2} />
              <path id="mark_2-5" d="M0 140L50 95.5L83.5 78.5L164 0" transform="translate(29 72.5)" stroke="#67348B" strokeWidth={state.items[2][5] ? 8 : 2}
              />
            </g>
          }
          {state.activeList === 1 &&
            <g id="maps_1">
              <circle id="mark_1-0" cx="7.5" cy="7.5" r="7.5" transform="translate(307 174)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][0] ? 10 : 0} />
              <circle id="mark_1-1" cx="7.5" cy="7.5" r="7.5" transform="translate(345 581)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][1] ? 10 : 0} />
              <circle id="mark_1-2" cx="7.5" cy="7.5" r="7.5" transform="translate(214 65)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][2] ? 10 : 0} />
              <g id="mark_1-3" stroke="#EB5A59" strokeWidth={state.items[1][3] ? 10 : 0}>
                <circle id="1-3" cx="7.5" cy="7.5" r="7.5" transform="translate(214 133)" fill="#EB5A59" />
                <circle id="1-3_2" cx="7.5" cy="7.5" r="7.5" transform="translate(282 311)" fill="#EB5A59" />
              </g>
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-3" d="M116.5 36L104.5 0C93.3333 13.5 68.7 43.8 59.5 57C50.3 70.2 16 100.167 0 113.5C0.166667 113.833 1.5 116 5.5 122C10.5 129.5 34.5 147.5 42 154.5C49.5 161.5 73.5 177 83 180.5C92.5 184 165 205.5 171.5 207.5C176.7 209.1 176.667 205.167 176 203L122.5 53.5C123.833 51 127.7 47.9 126.5 43.5C125.3 39.1 118.833 35.6667 116.5 36Z"
                transform="translate(356 495)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][3] ? 10 : 0} />
              <path id="mark_0-2" d="M0 37L71 0L98.5 51L17.5 90L0 37Z" transform="translate(269.5 167)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][2] ? 10 : 0} />
              <path id="mark_0-1" d="M54.5 20C27.6231 13.931 7.66667 9.16667 0 7V0C29.8333 7.16667 96.6052 22.5351 120.5 30.5C153.5 41.5 166 54.5 178.5 66C191 77.5 207.5 114 215 127.5C222.5 141 248.5 196.5 254 209.5C259.5 222.5 277 284 279.5 295.5C282 307 283 332 283 354.5C283 377 298 425 301 432.5C304 440 319.5 486.5 324 501C327.6 512.6 345.5 557.833 354 579L349 584.5L347 582C343.333 570.5 335.6 546.6 334 543C332 538.5 303 458.5 298 444.5C293 430.5 282 388 279.5 372.5C277 357 276 317 275 301.5C274 286 252 223.5 248.5 212.5C245.7 203.7 227.667 167.5 219 150.5C209.167 131.5 187.8 90.9 181 80.5C172.5 67.5 156.5 52.5811 150.5 49.5C132 40 101 30.5 54.5 20Z"
                transform="translate(0 14)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][1] ? 10 : 0} />
              <path id="mark_0-0" d="M0 7L5.5 0L13 4.5V9C19.8333 16.3333 34.7 32.4 39.5 38C44.3 43.6 65.1667 71.3333 75 84.5L71 88.5L98 134.5C113 164 143.3 224.2 144.5 229C145.7 233.8 158 273.333 164 292.5C171 315.333 185.9 363.8 189.5 375C194 389 195.5 401 198 412C200 420.8 208.5 452.333 212.5 467L203.5 479C198 459.5 189.5 421.5 179.5 379C167.998 330.115 136.5 235 129 216C121.5 197 101 163 75 109C54.2 65.8 16.3333 23 0 7Z"
                transform="translate(244 11.5)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][0] ? 10 : 0} />
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

