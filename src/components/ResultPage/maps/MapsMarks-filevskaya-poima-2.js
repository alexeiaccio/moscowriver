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
  const MapsBackBack = require(`./maps-${uid}-back.png`)
  const getActive = (active) =>
  state.items[active]
    .map((item, i) => item && i)
    .filter(item => item)
    .join()
  return (
    <Fragment>
      <Map back={MapsBack} second={state.items[0][7] || state.items[0][8] || state.items[0][9] || state.items[0][10] ? true : false} />
      <Svg
        second={state.items[0][7] || state.items[0][8] || state.items[0][9] || state.items[0][10] ? true : false}
        width="650" height="500" viewBox="0 0 650 500"  version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={MapsBackBack} x="0" y="0" width="100%" height="100%" />
          </pattern>
        </defs>
        <g id="Canvas" fill="none">
          {state.activeList === 0 &&
            <g id="maps_1">
              {/* back */}
              <rect fill="url(#img1)" width="100%" height="100%"/>
              {/* back */}
              <g id="mark_1-0">
                <circle id="Ellipse" cx="12.5" cy="12.5" r="12.5" transform="translate(568 400)"  fill={state.items[0][0] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][0] ? 10 : 0} />
                <text id="1" transform="translate(568 400)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="10.2793" y="16.802">1</tspan>
                </text>
              </g>
              <g id="mark_1-1">
                <circle id="Ellipse_2" cx="12.5" cy="12.5" r="12.5" transform="translate(511 322)"  fill={state.items[0][1] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][1] ? 10 : 0} />
                <text id="2" transform="translate(511 322)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">2</tspan>
                </text>
              </g>
              <g id="mark_1-2">
                <circle id="Ellipse_3" cx="12.5" cy="12.5" r="12.5" transform="translate(540 279)"  fill={state.items[0][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][2] ? 10 : 0} />
                <text id="3" transform="translate(540 279)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.06641" y="16.802">3</tspan>
                </text>
              </g>
              <g id="mark_1-3">
                <circle id="Ellipse_4" cx="12.5" cy="12.5" r="12.5" transform="translate(502 214)"  fill={state.items[0][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][3] ? 10 : 0} />
                <text id="4" transform="translate(502 214)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.48633" y="16.802">4</tspan>
                </text>
                <circle id="Ellipse_5" cx="12.5" cy="12.5" r="12.5" transform="translate(382 130)"  fill={state.items[0][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][3] ? 10 : 0} />
                <text id="4_2" transform="translate(382 130)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.48633" y="16.802">4</tspan>
                </text>
              </g>
              <g id="mark_1-4">
                <circle id="Ellipse_6" cx="12.5" cy="12.5" r="12.5" transform="translate(416 156)"  fill={state.items[0][4] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][4] ? 10 : 0} />
                <text id="5" transform="translate(416 156)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="9.05469" y="16.802">5</tspan>
                </text>
              </g>
              <g id="mark_1-5">
                <circle id="Ellipse_7" cx="12.5" cy="12.5" r="12.5" transform="translate(347 97)"  fill={state.items[0][5] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][5] ? 10 : 0} />
                <text id="6" transform="translate(347 97)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">6</tspan>
                </text>
              </g>
              <g id="mark_1-6">
                <circle id="Ellipse_8" cx="12.5" cy="12.5" r="12.5" transform="translate(310 87)"  fill={state.items[0][6] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][6] ? 10 : 0} />
                <text id="7" transform="translate(310 87)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.91406" y="16.802">7</tspan>
                </text>
              </g>
              <g id="mark_1-7">
                <circle id="Ellipse_9" cx="12.5" cy="12.5" r="12.5" transform="translate(138 25)"  fill={state.items[0][7] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][7] ? 10 : 0} />
                <text id="8" transform="translate(138 25)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.63867" y="16.802">8</tspan>
                </text>
              </g>
              <g id="mark_1-8">
                <circle id="Ellipse_10" cx="12.5" cy="12.5" r="12.5" transform="translate(47 108)"  fill={state.items[0][8] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][8] ? 10 : 0} />
                <text id="9" transform="translate(47 108)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="8.79688" y="16.802">9</tspan>
                </text>
              </g>
              <g id="mark_1-9">
                <circle id="Ellipse_11" cx="12.5" cy="12.5" r="12.5" transform="translate(19 289)"  fill={state.items[0][9] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[0][9] ? 10 : 0} />
                <text id="10" transform="translate(19 289)" fill="white" xmlSpace="preserve" fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="12" fontWeight="500" letterSpacing="0em">
                  <tspan x="6.27734" y="16.802">10</tspan>
                </text>
              </g>
              <g id="mark_1-10" strokeWidth={state.items[0][10] ? 8 : 2} >
                <path id="Vector_323" d="M75.7877 -0.329295L75.4786 -0.68244L75.1066 -0.396344C74.7478 -0.120375 74.3973 0.158937 74.0471 0.437938C73.4305 0.929252 72.8151 1.41961 72.1577 1.88906L72.1241 1.9131L72.0948 1.94236C72.0492 1.98795 72.0023 2.02394 71.9261 2.08109L71.9194 2.08609C71.8528 2.13603 71.7629 2.20341 71.6705 2.29286L66.2072 6.72162L66.2043 6.72404L64.3153 8.27936L62.4263 9.83467L62.4246 9.83605L57.6142 13.8316L49.8455 19.9713L39.998 27.3739L39.9963 27.3752L27.1067 37.1515L27.1052 37.1527L10.7367 49.6672L10.734 49.6693L5.92542 53.2935C5.92478 53.2939 5.92415 53.2944 5.92352 53.2949C4.21301 54.559 2.50335 55.8967 0.868651 57.2339L0.855598 57.2446L0.843295 57.2561L-0.341936 58.3671L-0.686095 58.6896L-0.384077 59.052L0.727093 60.3851L1.05958 60.784L1.44562 60.4367C2.91448 59.115 4.45904 57.8647 6.00701 56.6856L6.01048 56.6829L10.3015 53.3543L16.6667 48.6924L16.6668 48.6925L16.6771 48.6845L22.2309 44.3904L22.2329 44.3889L29.49 38.8362L29.4906 38.8357L36.6755 33.3555L36.6823 33.3504L36.6889 33.345C38.3006 32.0266 39.988 30.8527 41.6938 29.6662C42.1518 29.3529 42.615 29.0442 43.081 28.7335C44.0237 28.1052 44.9779 27.4691 45.9237 26.7726C47.3944 25.7434 48.8662 24.7869 50.3461 23.8251C50.3472 23.8244 50.3482 23.8238 50.3492 23.8231L53.3433 21.9384L56.3389 20.0526C57.8315 19.1571 59.2477 18.1883 60.6497 17.2292L60.6559 17.2249L60.656 17.225L60.6642 17.2192L62.9976 15.5527L65.3295 13.8875L65.3311 13.8863L65.3395 13.8804C67.1082 12.6278 68.8999 11.359 70.5459 9.93847L75.4282 6.01867L75.8204 5.70377L75.5032 5.31344L74.6175 4.22369C75.4658 3.51991 76.3624 2.82379 77.2577 2.18441L77.7069 1.86361L77.3434 1.44822L75.7877 -0.329295Z"
                  transform="translate(445.47 177.014)" fill="white" stroke="#67696B" />
                <path id="Vector_324" d="M76.7555 2.09816L77.1725 1.7739L76.8258 1.37532L75.3443 -0.328125L75.0273 -0.692544L74.6521 -0.388408L72.3463 1.48082L71.3527 0.274611L71.0402 -0.10475L70.6555 0.201177L67.3961 2.79337L67.3935 2.79547L62.8007 6.49861L62.7911 6.50629L62.782 6.51443L58.041 10.736L58.0334 10.7427L58.0262 10.7498L51.523 17.0299C49.961 18.2951 48.4755 19.6322 47.0675 20.9658C47.067 20.9662 47.0666 20.9667 47.0661 20.9671L43.7422 24.0688L38.7954 28.3502L31.9926 33.673L31.9899 33.6751L24.2145 39.6721L24.2144 39.672L24.2057 39.679C22.2856 41.2295 20.3686 42.7037 18.38 44.1028L18.3799 44.1027L18.3705 44.1097L18.3659 44.1131C16.6656 45.3696 14.9537 46.6346 13.3146 47.9754C11.3203 49.6 9.32555 51.1512 7.256 52.703L7.25382 52.7047C5.10107 54.3375 3.02177 55.9709 0.942005 57.6789L0.92311 57.6944L0.905819 57.7117C0.554517 58.0629 0.128623 58.4183 -0.320053 58.7921L-0.715283 59.1214L-0.374884 59.5071L0.736287 60.7661L1.05497 61.1272L1.42775 60.8223C1.72915 60.5758 2.02188 60.3269 2.31376 60.0787C2.83992 59.6313 3.36333 59.1863 3.9298 58.7616L3.92982 58.7616L3.93426 58.7582L21.7847 45.0584L21.7871 45.0566L39.8597 31.3567L39.8598 31.3567L48.4529 24.8391L48.4529 24.8392L48.46 24.8336L58.905 16.6127L58.905 16.6127L58.9104 16.6083L66.3172 10.61L66.3182 10.6092L73.9473 4.46282L73.9473 4.46287L73.9537 4.4576L74.8426 3.71697L74.8487 3.71186L74.8546 3.70657C75.5205 3.11483 76.1027 2.60578 76.7555 2.09816Z"
                  transform="translate(443.988 174.865)" fill="white" stroke="#67696B" />
                <path id="Vector_325" d="M-0.5 2.07376V2.57545L0.00169067 2.57375L65.7089 2.35157L66.2072 2.34989V1.85158V4.52044e-06V-0.502255L65.705 -0.49999L-0.00225427 -0.203743L-0.5 -0.201499V0.296252V2.07376Z"
                  transform="translate(4.70508 355.8)" fill="white" stroke="#67696B" />
                <path id="Vector_326" d="M0 -0.5H-0.5V0V2.74037V3.24037H0H74.8175H75.3175V2.74037V0V-0.5H74.8175H0Z" transform="matrix(0.957233 -0.289361 0.29024 0.956967 -18.9106 171.101)"
                  fill="white" stroke="#67696B" />
                <path id="Vector_327" d="M-0.0687702 -0.124934L-0.558021 -0.0569962L-0.496049 0.433046L13.3566 109.972L13.4183 110.461L13.9078 110.406L16.5746 110.11L17.0791 110.054L17.0154 109.55L3.16287 -0.0626899L3.0994 -0.564867L2.59804 -0.495248L-0.0687702 -0.124934Z"
                  transform="translate(281.017 21.334)" fill="white" stroke="#67696B" />
              </g>
            </g>
          }
        </g>
      </Svg>
    </Fragment>
  )
}

export default MapsMarks

