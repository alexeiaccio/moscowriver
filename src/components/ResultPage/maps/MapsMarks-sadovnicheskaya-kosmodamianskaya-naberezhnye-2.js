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
  transform: ${({second}) => second ? 'translateY(-125px)' : 'translateY(122px)'};
`

const Map = styled.div`
  width: 650px;
  height: 750px;
  position: absolute;
  top: 0;
  right: 0;
  background: url(${({back}) =>  back}) no-repeat;
  transition: all .2s ease-in-out;
  transform: ${({second}) => second ? 'translateY(-250px)' : 'translateY(0px)'};
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
      <Map back={MapsBack} second={state.items[0][1] || state.items[1][1] || state.items[1][2] || state.items[1][3] || state.items[1][4] || state.items[1][10] ? true : false} />
      <Svg
        second={state.items[0][1] || state.items[1][1] || state.items[1][2] || state.items[1][3] || state.items[1][4] || state.items[1][10] ? true : false}
        width="650" height="750" viewBox="0 0 650 750" version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={MapsBackBack} x="0" y="0" width="675" height="775" />
          </pattern>
        </defs>
        <g id="Canvas" fill="none">
          {state.activeList === 1 &&
            <g id="maps_1">
              {/* back */}
              <rect fill="url(#img1)" width="100%" height="100%" transform="translate(3 -15)"/>
              {/* back */}
              <g id="mark_1-8">
                <path id="Vector" d="M4.4669e-06 19.6165L1.90284 19.9825L5.04981 0.292782L3.00062 2.23377e-06L4.4669e-06 19.6165Z" transform="translate(243.628 210.551) rotate(60.3916)"
                  fill="#67348B" stroke="#67348B" strokeWidth={state.items[1][8] ? 10 : 0} />
                <circle id="Ellipse" cx="12.5" cy="12.5" r="12.5" transform="translate(221 223)"  fill={state.items[1][8] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][8] ? 10 : 0} />
                <text id="9" transform="translate(221 223)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">9</tspan>
                </text>
              </g>
              <g id="mark_1-7">
                <circle id="Ellipse_2" cx="12.5" cy="12.5" r="12.5" transform="translate(277 93)"  fill={state.items[1][7] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][7] ? 10 : 0} />
                <text id="8" transform="translate(277 93)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.63867" y="16.802">8</tspan>
                </text>
              </g>
              <g id="mark_1-6">
                <circle id="Ellipse_3" cx="12.5" cy="12.5" r="12.5" transform="translate(392 250)"  fill={state.items[1][6] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][6] ? 10 : 0} />
                <text id="7" transform="translate(392 250)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.91406" y="16.802">7</tspan>
                </text>
              </g>
              <g id="mark_1-5">
                <path id="Vector_2" d="M0.677685 1.17072L7.52056e-06 0.985878L0.246419 0L5.79118 1.60205L5.54477 2.52631L4.99028 2.34145L4.37419 4.25158L0.123232 3.01924L0.677685 1.17072Z"
                  transform="translate(464.744 437.059) rotate(60.3916)" fill="#5C5C5C" stroke="#5C5C5C" strokeWidth={state.items[1][5] ? 10 : 0} />
                <circle id="Ellipse_4" cx="12.5" cy="12.5" r="12.5" transform="translate(452 428)"  fill={state.items[1][5] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][5] ? 10 : 0} />
                <text id="6" transform="translate(452 428)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">6</tspan>
                </text>
              </g>
              <g id="mark_1-4">
                <path id="Vector_3" d="M2.89558 6.30382L0.6161 5.8725L1.50411e-05 9.63115L11.3976 11.6029L12.0137 8.09072L9.24128 7.53617L10.2886 2.11386C10.2886 1.37445 9.73412 0.819892 9.05643 0.63504L5.66796 0.0188688C4.92866 -0.104365 4.18939 0.388573 4.00456 1.12798L2.89558 6.30382Z"
                  transform="translate(479.18 530.982) rotate(60.3916)" fill="#5C5C5C" stroke="#5C5C5C" strokeWidth={state.items[1][4] ? 10 : 0} />
                <circle id="Ellipse_5" cx="12.5" cy="12.5" r="12.5" transform="translate(481 511)"  fill={state.items[1][4] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][4] ? 10 : 0} />
                <text id="5" transform="translate(481 511)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">5</tspan>
                </text>
              </g>
              <g id="mark_1-2">
                <path id="Vector_4" d="M47.0689 6.40818L38.0124 4.74452L38.3205 3.14247L21.3782 1.88041e-06L20.8853 2.64954L18.2977 2.1566L15.8334 1.72528C14.1084 1.4172 12.3217 1.54043 10.7199 2.1566L-1.50411e-05 5.97686L51.9359 15.5891L51.3814 12.4467L51.0118 10.5981C50.6422 8.44155 49.1019 6.8395 47.0689 6.40818Z"
                  transform="translate(502.577 598.257) rotate(60.3916)" fill="#E52716" stroke="#E52716" strokeWidth={state.items[1][8] ? 10 : 0} />
                <circle id="Ellipse_6" cx="12.5" cy="12.5" r="12.5" transform="translate(506 584)"  fill={state.items[1][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][2] ? 10 : 0} />
                <text id="3" transform="translate(506 584)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.06641" y="16.802">3</tspan>
                </text>
              </g>
              <g id="mark_1-3">
                <path id="Vector_5" d="M12.69 81.8575L12.6919 81.8471L12.6934 81.8366C12.7015 81.7799 12.7312 81.7325 12.7904 81.6948C12.8545 81.654 12.9489 81.63 13.0519 81.6447C13.1939 81.665 13.3259 81.8266 13.3063 81.9957L10.2299 98.6719C9.86536 100.304 10.9729 101.868 12.5475 102.1L28.5553 105.117L28.5585 105.118C30.1756 105.412 31.7378 104.381 32.0355 102.744C32.3294 101.127 31.2991 99.5646 29.6627 99.2664C29.6623 99.2663 29.6619 99.2663 29.6615 99.2662L13.6465 96.2476L13.1606 96.156L13.0636 96.6409L12.8171 97.8732L12.718 98.3689L13.2148 98.4626L29.233 101.482L29.2362 101.482C29.645 101.557 29.8927 101.915 29.8194 102.318C29.7452 102.727 29.388 102.974 28.9858 102.902C28.9851 102.902 28.9844 102.902 28.9838 102.902L12.9688 99.8829L12.9656 99.8824C12.5569 99.8081 12.3092 99.4501 12.3823 99.047C12.3823 99.0469 12.3823 99.0467 12.3824 99.0465L15.4625 82.3497L15.4625 82.3496L24.1493 35.3359L24.1501 35.3312L24.5806 32.8712L24.5814 32.8665L26.9833 19.87L27.0729 19.3855L26.5897 19.2888L25.3576 19.0423L24.861 18.943L24.768 19.4408L22.4884 31.641L22.4883 31.641L22.4867 31.6506C22.483 31.673 22.4574 31.7333 22.3748 31.7896C22.2957 31.8435 22.204 31.8651 22.1265 31.854C21.9845 31.8337 21.8526 31.6723 21.8721 31.5033L27.3481 2.02749C27.386 1.90664 27.4395 1.83935 27.4869 1.80192C27.5349 1.76403 27.6071 1.73234 27.7238 1.73234C27.769 1.73234 27.8422 1.75663 27.9152 1.83734C27.9868 1.91649 28.0229 2.01282 28.0246 2.08908L27.4705 19.3317L27.4547 19.8226L27.9452 19.8472L29.1774 19.9088L29.6858 19.9342L29.7021 19.4255L30.2565 2.17751C30.3302 0.723404 29.246 -0.423808 27.8117 -0.499307L27.7986 -0.499998H27.7854C26.5661 -0.499998 25.4297 0.403954 25.1993 1.63315L25.1991 1.63435L19.5927 31.95L19.5927 31.95L19.5919 31.9547L19.1614 34.4147L19.1606 34.4194L10.4747 81.4279L10.4746 81.4286L7.45592 97.6332L7.45578 97.6332L7.45391 97.6447C7.13038 99.6401 5.245 100.941 3.23501 100.561L3.2315 100.56L0.520714 100.067L0.107309 99.9921L-0.037924 100.386L-0.469153 101.557L-0.672861 102.11L-0.0940207 102.221L2.80155 102.776L2.80344 102.776C6.03393 103.382 9.06606 101.291 9.67107 98.0634L9.67117 98.0628L12.69 81.8575Z"
                  transform="translate(574 577) rotate(60.3916)" fill="#979797" stroke="#979797" strokeWidth={state.items[1][3] ? 10 : 0} />
                <circle id="Ellipse_7" cx="12.5" cy="12.5" r="12.5" transform="translate(559 631)"  fill={state.items[1][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][3] ? 10 : 0} />
                <text id="4" transform="translate(559 631)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.48633" y="16.802">4</tspan>
                </text>
              </g>
              <g id="mark_1-1">
                <circle id="Ellipse_8" cx="12.5" cy="12.5" r="12.5" transform="translate(325 511)"  fill={state.items[1][1] || state.items[1][10] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][1] || state.items[1][10] ? 10 : 0} />
                <text id="2" transform="translate(325 511)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">2</tspan>
                </text>
              </g>
              <g id="mark_1-0">
                <circle id="Ellipse_9" cx="12.5" cy="12.5" r="12.5" transform="translate(260 373)"  fill={state.items[1][0] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][0] ? 10 : 0} />
                <text id="1" transform="translate(260 373)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="10.2793" y="16.802">1</tspan>
                </text>
              </g>
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-1" d="M116.5 36L104.5 0C93.3333 13.5 68.7 43.8 59.5 57C50.3 70.2 16 100.167 0 113.5C0.166667 113.833 1.5 116 5.5 122C10.5 129.5 34.5 147.5 42 154.5C49.5 161.5 73.5 177 83 180.5C92.5 184 165 205.5 171.5 207.5C176.7 209.1 176.667 205.167 176 203L122.5 53.5C123.833 51 127.7 47.9 126.5 43.5C125.3 39.1 118.833 35.6667 116.5 36Z"
                transform="translate(356 495)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][1] ? 10 : 0} />
              <path id="mark_0-0" d="M54.5 20C27.6231 13.931 7.66667 9.16667 0 7V0C29.8333 7.16667 96.6052 22.5351 120.5 30.5C153.5 41.5 166 54.5 178.5 66C191 77.5 207.5 114 215 127.5C222.5 141 248.5 196.5 254 209.5C259.5 222.5 277 284 279.5 295.5C282 307 283 332 283 354.5C283 377 298 425 301 432.5C304 440 319.5 486.5 324 501C327.6 512.6 345.5 557.833 354 579L349 584.5L347 582C343.333 570.5 335.6 546.6 334 543C332 538.5 303 458.5 298 444.5C293 430.5 282 388 279.5 372.5C277 357 276 317 275 301.5C274 286 252 223.5 248.5 212.5C245.7 203.7 227.667 167.5 219 150.5C209.167 131.5 187.8 90.9 181 80.5C172.5 67.5 156.5 52.5811 150.5 49.5C132 40 101 30.5 54.5 20Z"
                transform="translate(0 14)" fill="#0B9A39" stroke="#0B9A39" strokeWidth={state.items[0][0] ? 10 : 0} />
            </g>
          }
        </g>
      </Svg>
    </Fragment>
  )
}

export default MapsMarks

