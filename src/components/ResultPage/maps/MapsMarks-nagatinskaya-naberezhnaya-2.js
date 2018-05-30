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
      <Map back={MapsBack} second={state.items[0][3] || state.items[1][6] || state.items[1][7] || state.items[1][8] || state.items[1][9] || state.items[1][10] ? true : false} />
      <Svg width="650" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={MapsBackBack} x="0" y="0" width="650" height="500" />
          </pattern>
        </defs>
        <g id="Canvas" fill="none">
          {state.activeList === 1 &&
            <g id="maps_1">
              {/* back */}
              <rect fill="url(#img1)" width="100%" height="100%"/>
              {/* back */}
              <path id="mark_1-9" d="M15.3817 201.799L15.5579 201.564L25.1274 188.467L51.1942 152.994L55.1277 147.473L58.9438 141.894L62.5838 136.256L66.165 130.559L69.5701 124.686L72.8578 118.813L76.0281 112.822L79.0223 106.831L80.7835 103.131L81.899 100.723L82.31 99.7837L83.2493 97.7282L84.6583 94.5567L87.2415 88.3312L87.3002 88.155L87.5351 87.5677L89.7073 82.047L96.9285 63.0182L120.471 0L123.641 1.17462L100.04 62.4309L99.1007 64.9563L92.2318 83.0454L89.766 89.3296L87.1828 95.6138L84.4235 101.839L83.719 103.308L82.1338 106.596L81.488 108.006L78.4352 114.114L75.2649 120.105L75.2062 120.281L72.7404 124.686L76.3804 120.927L83.308 114.29L84.717 112.998L86.948 110.943L90.4118 107.83L97.6917 101.604L105.148 95.5551L112.78 89.7995L120.471 84.2788L120.588 84.2201L122.643 82.8692L125.109 81.166L128.573 78.8755L129.16 78.4644L132.271 76.5263L136.557 73.8247L144.835 69.0088L153.23 64.369L161.743 60.0229H161.802L162.976 62.4309L154.522 66.777L146.185 71.358L138.142 76.1152L138.025 76.1739L131.156 80.4613L130.04 81.166L127.222 83.0454L124.698 84.7486L122.526 86.2169L122.173 86.4518L114.424 91.9725L106.85 97.7282L99.453 103.719L92.2318 109.885L88.1222 113.644L85.7738 115.7L85.1867 116.287L78.3178 122.865L76.6739 124.568L75.7933 125.449L74.9713 126.389L74.0907 127.328L73.2688 128.268L72.4469 129.208L71.6249 130.148L70.8617 131.146L70.0398 132.086L69.2766 133.084L68.5134 134.083L67.6914 135.081L66.9869 136.079L26.4777 191.228L17.554 203.385L16.9082 204.325L13.0334 209.61L12.9747 209.669L3.81608 222.12L2.17223 224.411L1.79166e-06 222.766L0.0587054 222.707L10.8024 208.025L15.3817 201.799Z"
                transform="translate(104.5 57.335)" fill="#979797" stroke="#979797" strokeWidth={state.items[1][9] ? 8 : 0} />
              <g id="mark_1-0">
                <circle id="Ellipse" cx="12.5" cy="12.5" r="12.5" transform="translate(43 63)" fill={state.items[1][0] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][0] ? 10 : 0} />
                <text id="1" transform="translate(43 63)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="10.2793" y="16.802">1</tspan>
                </text>
              </g>
              <g id="mark_1-1">
                <circle id="Ellipse_2" cx="12.5" cy="12.5" r="12.5" transform="translate(103 63)" fill={state.items[1][1] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][1] ? 10 : 0} />
                <text id="2" transform="translate(103 63)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">2</tspan>
                </text>
              </g>
              <g id="mark_1-2">
                <circle id="Ellipse_3" cx="12.5" cy="12.5" r="12.5" transform="translate(124 135)" fill={state.items[1][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][2] ? 10 : 0} />
                <text id="3" transform="translate(124 135)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.06641" y="16.802">3</tspan>
                </text>
              </g>
              <g id="mark_1-3">
                <circle id="Ellipse_4" cx="12.5" cy="12.5" r="12.5" transform="translate(242 297)" fill={state.items[1][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][3] ? 10 : 0} />
                <text id="4" transform="translate(242 297)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.48633" y="16.802">4</tspan>
                </text>
              </g>
              <g id="mark_1-4">
                <circle id="Ellipse_5" cx="12.5" cy="12.5" r="12.5" transform="translate(229 330)" fill={state.items[1][4] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][4] ? 10 : 0} />
                <text id="5" transform="translate(229 330)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">5</tspan>
                </text>
              </g>
              <g id="mark_1-5">
                <circle id="Ellipse_6" cx="12.5" cy="12.5" r="12.5" transform="translate(180 334)" fill={state.items[1][5] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][5] ? 10 : 0} />
                <text id="6" transform="translate(180 334)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">6</tspan>
                </text>
              </g>
              <g id="mark_1-6">
                <circle id="Ellipse_7" cx="12.5" cy="12.5" r="12.5" transform="translate(270 364)" fill={state.items[1][6] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][6] ? 10 : 0} />
                <text id="7" transform="translate(270 364)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.91406" y="16.802">7</tspan>
                </text>
              </g>
              <g id="mark_1-7">
                <circle id="Ellipse_8" cx="12.5" cy="12.5" r="12.5" transform="translate(368 351)" fill={state.items[1][7] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][7] ? 10 : 0} />
                <text id="8" transform="translate(368 351)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.63867" y="16.802">8</tspan>
                </text>
              </g>
              <g id="mark_1-8">
                <circle id="Ellipse_9" cx="12.5" cy="12.5" r="12.5" transform="translate(457 326)" fill={state.items[1][8] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][8] ? 10 : 0} />
                <text id="9" transform="translate(457 326)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">9</tspan>
                </text>
              </g>
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-0" d="M18.6481 1.3619L15.4643 0L0 3.63175C3.63865 25.7249 11.8256 73.6337 15.4643 88.5238C20.0126 107.137 31.3411 167.507 41.8445 192.483C57.3087 229.254 82.7793 257.854 95.5145 271.019C96.9358 272.488 98.7926 274.263 101 276.267L114 260.544C111.278 258.631 108.735 256.808 106.43 255.13C92.9675 245.324 74.7439 217.753 67.315 205.194L57.3087 179.771L50.0314 151.626L51.8507 145.724L38.2058 98.0575L34.1123 94.8794L33.2027 88.5238L29.564 78.9905L26.3802 64.9175L25.9254 62.6484L28.6544 59.0167L23.6512 33.1405L20.4674 32.6865L15.4643 7.26349L18.6481 1.3619Z"
                transform="translate(71 31)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[0][0] ? 10 : 0} />
              <path id="mark_0-1" d="M60.9199 60.8652C63.3456 62.3784 73.7461 66.4952 95.9419 70.8533C111.423 73.893 131.153 74.5446 156 73.4557L155.5 48.9557C130.308 49.6236 111.006 44.9551 95.9419 40.8914C87.4533 38.6016 78.1571 35.6551 70.9262 33.1731C54.4389 27.6878 30.1592 12.0576 13 0L0 15.7227C13.6154 28.0822 40.5681 49.146 60.9199 60.8652Z"
                transform="translate(172 291.544)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][1] ? 10 : 0} />
              <path id="mark_0-2" d="M292.786 0.0299988C245.805 6.5979 33.1913 36.3211 9.5762 38.1342C6.47613 38.3722 2.95108 38.4027 0 38.481L0.5 62.981C20.1827 62.1183 43.0766 60.2107 69.6139 57.2008C117.644 51.7532 272.987 30.0667 293 25.981V0L292.786 0.0299988Z"
                transform="translate(327.5 302.02)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][2] ? 10 : 0} />
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

