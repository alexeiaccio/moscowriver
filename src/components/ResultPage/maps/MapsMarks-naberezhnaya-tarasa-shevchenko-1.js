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
      <Map back={MapsBack} second={state.items[0][6] || state.items[1][3] ? true : false} />
      <Svg width="650" height="500" viewBox="0 0 650 500" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g id="Canvas" fill="none">
          {state.activeList === 2 &&
            <g id="maps_2" strokeLinecap="round">
            <path id="mark_2-0" d="M33 77L33.4023 77.9155L34.1761 77.5755L33.9697 76.7559L33 77ZM15 5.5L14.536 4.61417L13.8379 4.97986L14.0303 5.74413L15 5.5ZM25.964 0.885832C26.4532 0.629568 26.6421 0.0252243 26.3858 -0.464007C26.1296 -0.953238 25.5252 -1.1421 25.036 -0.885832L25.964 0.885832ZM0.402274 92.4155L33.4023 77.9155L32.5977 76.0845L-0.402274 90.5845L0.402274 92.4155ZM33.9697 76.7559L15.9697 5.25587L14.0303 5.74413L32.0303 77.2441L33.9697 76.7559ZM15.464 6.38583L25.964 0.885832L25.036 -0.885832L14.536 4.61417L15.464 6.38583Z"
              transform="translate(8.5 371.5)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[2][0] ? 8 : 2} />
            <path id="mark_2-1" d="M0 78L75.5 56.5L128 31.5L182.5 0" transform="translate(19 276.5)" stroke="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[2][1] ? 8 : 2} />
            <path id="mark_2-2" d="M0 43.4924C20 34.159 61.5 15.4921 91.5 6.9923C121.5 -1.50748 137 -1.50796 168 2.99238C195.5 9.49238 224.5 20.4923 240 48.4923C255.5 76.4923 266.5 101.492 263.5 146.992C260.5 192.492 260 201.992 256.5 217.492C253 232.992 195 337.992 187 349.992C180.6 359.592 163 385.992 155 397.992"
              transform="translate(368.5 98.5078)" stroke="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[2][2] ? 8 : 2} />
              {/* Active */}
              <use xlinkHref={`#mark_2-${ getActive(2) || 0 }`} />
            </g>
          }
          {state.activeList === 1 &&
            <g id="maps_1">
              <circle id="mark_1-0" cx="7.5" cy="7.5" r="7.5" transform="translate(91 345)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][0] ? 10 : 0} />
              <circle id="mark_1-1" cx="7.5" cy="7.5" r="7.5" transform="translate(212 271)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][1] ? 10 : 0} />
              <circle id="mark_1-2" cx="7.5" cy="7.5" r="7.5" transform="translate(191 274)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][2] ? 10 : 0} />
              <circle id="mark_1-3" cx="7.5" cy="7.5" r="7.5" transform="translate(347 144)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][3] ? 10 : 0} />
              <circle id="mark_1-4" cx="7.5" cy="7.5" r="7.5" transform="translate(29 345)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][4] ? 10 : 0} />
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-4" d="M4 78.5H0L10 108C10 108 74.5 93 102 81C119.275 73.4618 162.5 53 179 41.5C192.2 32.3 209.167 20.3333 216 15.5L202.5 0L192 7H189L167.5 22L166 25.5C161.667 28 152.1 33.6 148.5 36C144 39 97.5 62 81.5 68.5C68.7 73.7 34.5 82 19 85.5H10L4 78.5Z"
                transform="translate(10 262)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][4] ? 10 : 0} />
              <path id="mark_0-3" d="M28 1.22817C21.6839 2.5348 12.1667 4.06172 0 7.72839L5 16.2284C9.33333 14.8951 19.2 11.8284 24 10.2284C30 8.22839 55 7.72839 70.5 10.2284C86 12.7284 107 21.2284 120.5 31.2284C134 41.2284 155 69.2284 161 91.2284C167 113.228 163.5 159.728 164 167.228C164.4 173.228 160.833 196.728 159 207.728L174 207.228C175.167 195.895 177.6 170.828 178 161.228C178.5 149.228 177 126.228 176 108.228C175.5 87.2284 164.5 67.7284 161 61.7284C157.5 55.7284 146 40.7285 136.5 31.2284C127 20.2284 112 10.7279 90.5 5.72817C70.628 1.10706 42.5 -1.77148 28 1.22817Z"
                transform="translate(459.5 93.7715)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][3] ? 10 : 0} />
              <path id="mark_0-2" d="M6.5 68.5L0 61L12.5 51C18.5 47.1667 31.3 39.2 34.5 38C37.7 36.8 55.1667 27.5 63.5 23L90 12.5L122 0L126.5 9.5L39 45.5L6.5 68.5Z"
                transform="translate(321 107)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][2] ? 10 : 0} />
              <path id="mark_0-1" d="M126 7.5L119.5 0L11.5 93.5L0 101.5L4.5 111L51.5 73.5L126 7.5Z" transform="translate(201.5 168)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][1] ? 10 : 0}
              />
              <path id="mark_0-0" d="M22 7.5L0 22.5L11.5 42L33 28L49 16L36 0L25 7.5H22Z" transform="translate(177 261.5)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][0] ? 10 : 0}
              />
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

