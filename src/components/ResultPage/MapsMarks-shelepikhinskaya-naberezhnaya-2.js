import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'


const Svg = styled.svg`
  min-width: 702px;
  height: 500px;
  z-index: 1;
  @media (max-width: 1199px) {
    margin-left: -100px;
  }
  transition: all .2s ease-in-out;
  transform: ${({second}) => second ? 'scale(1.4) translate(50px, 70px)' : 'scale(1.4) translate(-80px, -70px)'};
`

const Map = styled.div`
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({back}) => 'url(' + back + ') 50% 50% no-repeat'};
  background-size: cover;
  @media (max-width: 1199px) {
    width: 1000px;
    background-position-x: 60%;
    left: -300px;
  }
  transition: all .2s ease-in-out;
  transform: ${({second}) => second ? 'scale(1.4) translate(50px, 70px)' : 'scale(1.4) translate(-80px, -70px)'};
`

const MapsMarks = ({state, uid}) => {
  const MapsBack = require(`./maps-${uid}.png`)

  return (
    <Fragment>
      <Map back={MapsBack} second={state.items[0][3] || state.items[1][6] || state.items[1][7] || state.items[1][8] || state.items[1][9] || state.items[1][10] ? true : false} />
      <Svg
        second={state.items[0][3] || state.items[1][6] || state.items[1][7] || state.items[1][8] || state.items[1][9] || state.items[1][10] ? true : false}
        viewBox="0 0 702 500" version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Canvas" fill="none">
          {state.activeList === 1 &&
            <g id="maps_1">
              {/* back */}
              <g>
                <path id="mark_1b-6" d="M27.3846 51.5L12.8846 15.5L6.98892 0L0 2.5L1.38461 10.5L4.88461 18.5V22.5L8.88461 30L12.8846 43.5V51.5L16.3846 56.5L27.3846 51.5Z"
                  transform="translate(579.115 403)" fill="#F05A5A" />
                <g id="mark_1b-5" transform="translate(509.5 237)">
                  <path d="M39.5 98.5L45 107L50 119L56.5 127L62 142.654L66.9049 140.5L51.5 100L47 98.5L45 96L39.5 98.5Z" fill="#53B36C" />
                  <path d="M69.6154 168.5L76.6043 166L71.7547 153.25L67.1924 154.5L69.6154 168.5Z" fill="#53B36C" />
                </g>
                <path id="mark_1b-4" d="M0 3L5 15L7.19232 14L11.7546 12.75L6.90491 0L2 2.15384L0 3Z" transform="translate(569.5 377.5)" fill="#F0C41B"
                />
                <path id="mark_1b-3" d="M37.5 93.5L42.5 91.5C39.5 76.5 36 59.5 29.5 43.5C26.1034 35.1392 13.6667 10.6667 6.5 0L0 3.5C3.33333 9.16667 10.7 21.6 13.5 26C17 31.5 23.5 46 27 56C29.8 64 35.1667 84.3333 37.5 93.5Z"
                  transform="translate(509.5 237)" fill="#53B36C" />
                <path id="mark_1b-2" d="M31.5 35.7902L38 32.2902C33.3333 26.1235 21.2 11.9905 10 4.7905C8.27621 3.68235 5.88285 2.03885 3 0L0 4.07591C7.10353 8.95872 13.7985 13.8638 16 15.7902C19.1373 18.5353 23.2798 24.3956 26.7894 29.3605C28.6044 31.9281 30.2502 34.2562 31.5 35.7902Z"
                  transform="translate(478 204.71)" fill="#EB5A59" />
                <path id="mark_1b-1" fillRule="evenodd" clipRule="evenodd" d="M16 15.2857L19 11.2098C14.729 8.18922 9.38363 4.30087 3.54956 0L0 5C4.12146 7.32301 10.1971 11.2969 16 15.2857Z"
                  transform="translate(462 193.5)" fill="#F0C41B" />
                <path id="mark_1b-0" d="M342 121.833L311 93.8333C299.167 84.8333 273.8 66.0333 267 62.8333C260.2 59.6333 231.833 45.8333 218.5 39.3333L217 34.8333C204.5 26.8333 176.4 10.3333 164 8.33333C148.5 5.83333 123.5 -2.66667 98.5 0.833333C78.5 3.63333 24.5 12.9998 0 17.333L3 34.333C3 34.333 12 33.833 17.5 31.833C23 29.833 72.8 16.933 82 15.333C88.1667 14.1663 102.5 11.833 110.5 11.833C120.5 11.833 154.5 14.833 168.5 20.833C179.7 25.633 211.167 40.833 225.5 47.833L242 55.833L249 56.833L250.5 60.833L255 64.833V68.333L267 76.333L269.5 73.833C278.667 79.1663 299 92.433 307 102.833C317 115.833 320 122.833 327 128.333C337 135.933 369.833 153.833 385 161.833L388.55 156.833C372.736 145.175 353.331 130.486 342 121.833Z"
                  transform="translate(77 36.667)" fill="#53B36C" />
                <path id="mark_1b-7" fillRule="evenodd" clipRule="evenodd" d="M16 15.2857L19 11.2098C14.729 8.18922 9.38363 4.30087 3.54956 0L0 5C4.12146 7.32301 10.1971 11.2969 16 15.2857Z"
                  transform="translate(399 163)" fill="#F0C41B" />
                <path id="mark_1b-8" fillRule="evenodd" clipRule="evenodd" d="M16 15.2857L19 11.2098C14.729 8.18922 9.38363 4.30087 3.54956 0L0 5C4.12146 7.32301 10.1971 11.2969 16 15.2857Z"
                  transform="translate(329 100)" fill="#F0C41B" />
                <path id="mark_1b-9" fillRule="evenodd" clipRule="evenodd" d="M16 15.2857L19 11.2098C14.729 8.18922 9.38363 4.30087 3.54956 0L0 5C4.12146 7.32301 10.1971 11.2969 16 15.2857Z"
                  transform="translate(92 65.1943) rotate(-48.3352)" fill="#F0C41B" />
              </g>
              {/* back */}
              <path id="mark_1-10" d="M464 82L379 182.25L382 183.5L466.5 84L464 82ZM248.5 0L235.5 92H241L253.5 0H248.5ZM0 114L62 104L63.5 108L0 118V114Z"
                transform="translate(59 72)" stroke="#000" strokeWidth={state.items[1][10] ? 5 : 2} />
              <g id="mark_1-2">
                <circle id="Ellipse" cx="12.5" cy="12.5" r="12.5" transform="translate(510 271)" fill={state.items[1][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][2] ? 10 : 0} />
                <text id="3" transform="translate(519.286 276.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">3</tspan>
                </text>
                <circle id="Ellipse_2" cx="12.5" cy="12.5" r="12.5" transform="translate(539 348)" fill={state.items[1][2] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][2] ? 10 : 0} />
                <text id="3_2" transform="translate(548.286 353.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">3</tspan>
                </text>
              </g>
              <g id="mark_1-1">
                <circle id="Ellipse_3" cx="12.5" cy="12.5" r="12.5" transform="translate(550 377)" fill={state.items[1][1] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][1] ? 10 : 0} />
                <text id="2" transform="translate(559.286 382.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">2</tspan>
                </text>
              </g>
              <g id="mark_1-3">
                <circle id="Ellipse_4" cx="12.5" cy="12.5" r="12.5" transform="translate(462 174)" fill={state.items[1][3] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][3] ? 10 : 0} />
                <text id="4" transform="translate(471.286 179.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">4</tspan>
                </text>
              </g>
              <g id="mark_1-4">
                <circle id="Ellipse_5" cx="12.5" cy="12.5" r="12.5" transform="translate(389 170)" fill={state.items[1][4] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][4] ? 10 : 0} />
                <text id="5" transform="translate(398.286 175.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">5</tspan>
                </text>
              </g>
              <g id="mark_1-5">
                <circle id="Ellipse_6" cx="12.5" cy="12.5" r="12.5" transform="translate(422 146)" fill={state.items[1][5] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][5] ? 10 : 0} />
                <text id="6" transform="translate(431.286 151.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">6</tspan>
                </text>
              </g>
              <g id="mark_1-6">
                <circle id="Ellipse_7" cx="12.5" cy="12.5" r="12.5" transform="translate(393 127)" fill={state.items[1][6] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][6] ? 10 : 0} />
                <text id="7" transform="translate(402.286 132.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">7</tspan>
                </text>
              </g>
              <g id="mark_1-7">
                <circle id="Ellipse_8" cx="12.5" cy="12.5" r="12.5" transform="translate(319 106)" fill={state.items[1][7] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][7] ? 10 : 0} />
                <text id="8" transform="translate(328.286 111.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">8</tspan>
                </text>
              </g>
              <g id="mark_1-8">
                <circle id="Ellipse_9" cx="12.5" cy="12.5" r="12.5" transform="translate(207 45)" fill={state.items[1][8] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][8] ? 10 : 0} />
                <text id="9" transform="translate(216.286 50.7139)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">9</tspan>
                </text>
              </g>
              <g id="mark_1-9">
                <circle id="Ellipse_10" cx="12.5" cy="12.5" r="12.5" transform="translate(95 63)" fill={state.items[1][9] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][9] ? 10 : 0} />
                <text id="10" transform="translate(102 68.7139)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">10</tspan>
                </text>
              </g>
              <g id="mark_1-0">
                <circle id="Ellipse_11" cx="12.5" cy="12.5" r="12.5" transform="translate(568 423)" fill={state.items[1][0] ? '#F05A5A' : '#000'} stroke="#F05A5A" strokeWidth={state.items[1][0] ? 10 : 0} />
                <text id="1" transform="translate(577.286 428.714)" fill="white" space="preserve" style={{whiteSpace: 'pre'}} fontFamily="Montserrat"
                  fontStyle="Medium" fontSize="11.4286" fontWeight="500" letterSpacing="0em">
                  <tspan x="0" y="11.24">1</tspan>
                </text>
              </g>
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark-0-0" d="M8 0L0 3V7L4 14.5L8 28V36L11.5 41L22.5 36L8 0Z" transform="translate(584 418.5)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][0] ? 10 : 0}/>
              <path id="mark-0-1" d="M5.5 11L0 2.5L5.5 0L7.5 2.5L12 4L43 85.5L35 88.5L31.5 80.5L27 54.5L23.5 49.5L17 31L10.5 23L5.5 11Z"
                transform="translate(549 333)" fill="#EFC319" stroke="#EFC319" strokeWidth={state.items[0][1] ? 10 : 0}/>
              <path id="mark-0-2" d="M37.5 93.5L42.5 91.5C39.5 76.5 36 59.5 29.5 43.5C26.1034 35.1392 13.6667 10.6667 6.5 0L0 3.5C3.33333 9.16667 10.7 21.6 13.5 26C17 31.5 23.5 46 27 56C29.8 64 35.1667 84.3333 37.5 93.5Z"
                transform="translate(509.5 237)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][2] ? 10 : 0}/>
              <path id="mark-0-3" d="M439 200.333L432.5 203.833C428.833 199.333 421.76 187.998 417 183.833C413 180.333 394.167 167 385 161.833C369.833 153.833 337 135.933 327 128.333C320 122.833 317 115.833 307 102.833C299 92.433 278.667 79.1663 269.5 73.833L267 76.333L255 68.333V64.833L250.5 60.833L249 56.833L242 55.833L225.5 47.833C211.167 40.833 179.7 25.633 168.5 20.833C154.5 14.833 120.5 11.833 110.5 11.833C102.5 11.833 88.1667 14.1663 82 15.333C72.8 16.933 23 29.833 17.5 31.833C12 33.833 3 34.333 3 34.333L0 17.333C24.5 12.9998 78.5 3.63333 98.5 0.833333C123.5 -2.66667 148.5 5.83333 164 8.33333C176.4 10.3333 204.5 26.8333 217 34.8333L218.5 39.3333C231.833 45.8333 260.2 59.6333 267 62.8333C273.8 66.0333 299.167 84.8333 311 93.8333L342 121.833C360.333 135.833 399.8 165.633 411 172.833C422.2 180.033 434.333 194.167 439 200.333Z"
                transform="translate(77 36.667)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][3] ? 10 : 0}/>
            </g>
          }
        </g>
      </Svg>
    </Fragment>
  )
}

export default MapsMarks

