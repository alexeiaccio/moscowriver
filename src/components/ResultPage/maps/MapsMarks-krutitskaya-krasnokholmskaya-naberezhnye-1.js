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
`

const Map = styled.div`
  width: 650px;
  height: 500px;
  position: absolute;
  top: 0;
  right: 0;
  background: url(${({back}) =>  back}) no-repeat;
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
      <Svg
        width="650" height="500" viewBox="0 0 650 500" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <g id="maps_01">
          {state.activeList === 1 &&
            <g id="maps_2" strokeLinecap="round">
              <path id="mark_2-0" d="M153.5 0L100.5 17.5L44.5 38.5L26.5 47.5L0 26M157 9L100.5 31L64.5 44.5L74.5 63.5V82L72 94L84.5 99.5L89 108.5V124L72 131.5"
                transform="translate(324 169)" stroke="#945BA4" strokeWidth={state.items[1][0] ? 8 : 2} />
              <path id="mark_2-1" d="M0 0L9.5 25L24.5 29L55.5 71V90L84.5 135L103.5 176.5L110 173L116.5 206.5L119.5 237V270L110 282.5L98.5 305L76 331.5"
                transform="translate(292 129.5)" stroke="#53B36C" strokeWidth={state.items[1][1] ? 8 : 2} />
              <path id="mark_2-2" d="M35.4238 58.9284L1.17332 10.1332C0.529318 9.21572 0.764998 7.94819 1.69574 7.32352L10.9908 1.08507C11.8906 0.481152 13.1077 0.703737 13.7355 1.58703L48.5772 50.6062C49.2497 51.5523 48.9782 52.8703 47.9865 53.4736L38.1003 59.4881C37.2 60.0357 36.0292 59.791 35.4238 58.9284Z"
                transform="translate(314 141)" stroke="#F0C41B" strokeWidth={state.items[1][2] ? 8 : 2} />
              <path id="mark_2-3" d="M0 0L19.5 43.5L65 91L94 129.5L120 188.5C123.167 203 129.3 233.9 128.5 241.5C127.7 249.1 128.5 264.333 126 276L130.5 291L111 343"
                transform="translate(278 124.5)" stroke="#F0C41B" strokeWidth={state.items[1][3] ? 8 : 2} />
              <path id="mark_2-4" d="M124.5 98.5L110 70.5L91 77L70 28L52 0L0 39V50L10.5 64.5" transform="translate(302.5 227)" stroke="#C4549A"
                strokeWidth={state.items[1][4] ? 8 : 2} />
              <path id="mark_2-5" d="M0 0L24.5 48.5L73 96L103 148.5L117.5 182.5L128 237.5V274.5L113.5 302.5L88.5 333M117.5 343.5L136.5 289L144.5 269L189.5 243M119.5 139.5L130 144.5L134.5 152V163.5L119.5 170.5L98.5 126.5L82.5 102L111 89.5"
                transform="translate(276 126.5)" stroke="#F05A5A" strokeWidth={state.items[1][5] ? 8 : 2} />
              <g id="mark_2-6" transform="translate(281 114)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[1][6] ? 8 : 2}>
                <path d="M9.30957 0L14.7865 13.9644L5.47693 17.6156L0 3.65129L9.30957 0Z" />
                <path d="M59 101.693L71.2238 92.9997L77.0195 101.149L64.7957 109.843L59 101.693Z" />
                <path d="M106.335 186.971L120.608 182.356L123.684 191.871L109.412 196.486L106.335 186.971Z" />
              </g>
              <g id="mark_2-7" transform="translate(294 160)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[1][7] ? 8 : 2}>
                <path d="M105.043 240L119.727 243.065L117.684 252.854L103 249.789L105.043 240Z" />
                <path d="M56.9697 66.9381L70.0788 59.6475L74.9392 68.3868L61.8301 75.6774L56.9697 66.9381Z" />
                <path d="M0 7.29062L13.109 0L17.9694 8.73936L4.86041 16.03L0 7.29062Z" />
              </g>
              {/* Active */}
              <use xlinkHref={`#mark_2-${ getActive(1) || 0 }`} />
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-0" d="M10.7132 44.2799L0 7.85611L5.71376 0C10.118 21.0689 22.771 77.2291 41.4237 116.057C58.9216 152.481 90.7034 182.835 105.344 194.262L98.9167 200.69L86.7753 186.049H83.5614L69.6345 170.336V167.48C68.3252 166.408 63.8495 162.266 56.4219 154.267C47.1373 144.268 37.8527 125.342 29.6394 103.916C23.0688 86.7751 15.7125 64.3969 12.8557 55.3504L8.57055 52.1365L10.7132 44.2799Z"
                transform="translate(246.548 23.4121)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][0] ? 10 : 0}  />
              <path id="mark_0-1" fill-rule="evenodd" clip-rule="evenodd" d="M0 23.2113L6.07077 18.9259L22.4973 41.7805L43.209 29.9962L34.2816 5.71349L43.209 0L50.7081 16.7836L56.7788 14.2839L61.7782 29.9962V41.7805L67.4918 60.3497L81.7758 76.062L89.2748 97.8451L81.7758 100.345L76.7764 92.4886L61.7782 100.345L58.2072 97.8451L56.7788 100.345C51.8984 96.7738 39.1381 85.3466 27.1396 68.2058C15.141 51.0651 4.04713 31.0675 0 23.2113ZM67.0662 90.9578C65.7068 91.8137 63.9144 91.4469 63.0006 90.1258L33.4566 47.4155C32.5266 46.071 32.8443 44.2295 34.1709 43.2742L38.2446 40.3412C39.6009 39.3647 41.4937 39.6848 42.4535 41.053L72.4658 83.8365C73.451 85.2409 73.06 87.184 71.6083 88.098L67.0662 90.9578Z"
                transform="translate(284.043 106.616)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][1] ? 10 : 0}  />
              <path id="mark_0-4" d="M5.74208 33.0575L0 10.3561L20.7118 0L24.997 19.6405H50.7082L53.9221 31.4247L74.9909 27.8537L81.4187 60.7066H36.4242L19.4708 63.6461L5.74208 33.0575Z"
                transform="translate(374.033 230.173)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][4] ? 10 : 0}  />
              <path id="mark_0-2" d="M16.1841 183.589L0 167.405C3.76776 163.58 13.7118 151.837 23.346 135.459C32.9802 119.08 36.0724 99.5713 36.4142 91.8639H44.5412C43.8552 86.1931 44.5412 72.8364 42.989 53.6099C41.6211 36.6669 35.7398 13.1496 31.8624 3.54027L46.0235 0C48.3837 10.2839 53.4075 33.6838 54.6213 45.0127C55.8351 56.3416 58.1616 85.1358 59.1731 98.1169L50.0695 105.197C43.4947 110.254 39.9544 128.968 36.4142 139.083C33.5819 147.175 30.1765 163.022 27.3106 174.485L16.1841 183.589Z"
                transform="translate(363.414 292.998)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][2] ? 10 : 0}  />
              <path id="mark_0-3" d="M23.3628 40.9456C19.8944 32.275 6.34242 12.284 0 3.37232L5.78056 0C7.38625 2.72969 11.9464 10.2122 17.3416 18.3049C22.7367 26.3977 36.7705 56.1994 43.113 70.0887C45.2807 76.2706 50.2423 91.6693 52.7472 103.808C55.2521 115.947 55.7177 143.87 55.6375 156.315H49.6161C49.2147 148.366 48.0265 127.99 46.485 110.071C44.5581 87.6711 27.6983 51.7837 23.3628 40.9456Z"
                transform="translate(350.631 226.38)" fill="#945BA4" stroke="#945BA4" strokeWidth={state.items[0][3] ? 10 : 0}  />
              <rect id="mark_0-7" width="18.9838" height="17.4953" transform="translate(352.616 211.399) rotate(55.5043)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][7] ? 10 : 0}
              />
              <rect id="mark_0-5" width="16.13" height="62.4884" transform="translate(392.291 399.967) rotate(31.3421)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][5] ? 10 : 0}
              />
              <path id="mark_0-6" d="M0 6.5L1.5 0L19.5 20L14 21L0 6.5Z" transform="translate(315.5 190)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][6] ? 10 : 0}
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

