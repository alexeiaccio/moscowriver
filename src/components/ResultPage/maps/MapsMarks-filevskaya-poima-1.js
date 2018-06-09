import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

const Svg = styled.svg`
  min-width: 650px;
  height: 500px;
  z-index: 1;
  @media (max-width: 1199px) {
    margin-left: -110px;
    transform: ${({second}) => second && 'translateX(140px)'};
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
  @media (max-width: 1199px) {
    transform: ${({second}) => second && 'translateX(140px)'};
  }
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
      <Map back={MapsBack} second={state.items[0][3] || state.items[1][0] ? true : false} />
      <Svg
        second={state.items[0][3] || state.items[1][0] ? true : false}
        width="650" height="500" viewBox="0 0 650 500" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Canvas" fill="none">
          {state.activeList === 1 &&
            <g id="maps_1">
              <circle id="mark_1-0" cx="7.5" cy="7.5" r="7.5" transform="translate(44 141)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][0] ? 10 : 0}  />
              <circle id="mark_1-1" cx="7.5" cy="7.5" r="7.5" transform="translate(320 107)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][1] ? 10 : 0}  />
              <circle id="mark_1-2" cx="7.5" cy="7.5" r="7.5" transform="translate(384 148)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][2] ? 10 : 0}  />
              <circle id="mark_1-3" cx="7.5" cy="7.5" r="7.5" transform="translate(276 86)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][3] ? 10 : 0}  />
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-0" d="M0 10.5L20 0L22.5 3.5L17 10.5L63.5 133.5L54 138L57 142C57 142 64.094 138.577 69 138C77.5 137 80.5 145 80.5 145L45.5 165.5L29 138L45.5 128.5L0 10.5Z"
                transform="translate(526 342.5)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][0] ? 10 : 0}  />
              <path id="mark_0-1" d="M96.5 68.27C86.5 62.77 35 26.77 29 21.77C25.3016 18.688 17.6138 11.0466 7.34171 0.836609L6.5 0L2.5 3.26997L0 20.27C42.5 48.77 130.5 109.57 142.5 124.77C154.5 139.97 164.5 181.103 168 199.77L178 194.77L175 188.77C175.833 188.77 177.6 187.47 178 182.27C178.5 175.77 163.5 133.77 152.5 115.27C141.5 96.77 106.5 73.77 96.5 68.27Z"
                transform="translate(366.5 140.73)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][1] ? 10 : 0}  />
              <path id="mark_0-2" d="M16.2209 27C3.22086 42.5 0.720861 77 0.220861 84.5C0.0492074 87.0748 -0.00581411 106.868 0.000476898 132.5H9.19957C9.35794 103.892 9.91735 77.6627 11.2209 65C14.7209 31 41.9691 17.1228 59.7209 13.5C84.2209 8.5 118.221 10 136.721 12C159.952 14.7877 179.837 25.8865 194.721 37.7238C211.872 51.3639 222.382 65.9846 223.721 70C225.721 76 218.554 85.1667 214.721 89L250.721 113.5C272.888 115.167 317.921 118.9 320.721 120.5C323.521 122.1 326.888 125.5 328.221 127L332.221 123.73C326.024 117.571 318.925 110.521 311.221 103C290.221 82.5 243.721 49 226.221 39C208.721 29 165.721 9.5 153.721 6C141.721 2.5 126.221 0 89.2209 0C52.2209 0 29.2209 11.5 16.2209 27Z"
                transform="translate(40.7793 17)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][2] ? 10 : 0}  />
              <path id="mark_0-3" d="M0 204.5H18.5L17.5 91C17.1437 68.8199 16.7969 32.8429 16.9787 0H7.77962C7.78799 34.0976 7.90486 78.5275 8 106.5C8.66667 110.667 10 119.7 10 122.5C10 125.3 8.66667 135.333 8 140V163.5L0 204.5Z"
                transform="translate(33 149.5)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][3] ? 10 : 0}  />
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

