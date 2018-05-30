import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'


const Svg = styled.svg`
  min-width: 702px;
  height: 500px;
  z-index: 1;
  transition: all .2s ease-in-out;
  transform: ${({second}) => second ? 'scale(1.4) translate(100px, 75px)' : 'scale(1.4) translate(-80px, -70px)'};
  @media (max-width: 1199px) {
    margin-left: -100px;
    transform: ${({second}) => second ? 'scale(1.4) translate(150px, 75px)' : 'scale(1.4) translate(-80px, -70px)'};
  }
`

const Map = styled.div`
  width: 1400px;
  height: 700px;
  position: absolute;
  top: -130px;
  right: -470px;
  background: ${({back}) => 'url(' + back + ') no-repeat'};
  transition: all .2s ease-in-out;
  transform: ${({second}) => second ? 'translate(25px, 130px)' : 'translate(-230px, -70px)'};
  @media (max-width: 1199px) {
    transform: ${({second}) => second ? 'translate(90px, 130px)' : 'translate(-230px, -70px)'};
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
      <Map back={MapsBack} second={state.items[0][3] ? true : false} />
      <Svg
        second={state.items[0][3] ? true : false}
        viewBox="0 0 702 500" version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Canvas" fill="none">
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_2-0-0" d="M8 0L0 3V7L4 14.5L8 28V36L11.5 41L22.5 36L8 0Z" transform="translate(584 418.5)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[0][0] ? 10 : 0}/>
              <path id="mark_2-0-1" d="M5.5 11L0 2.5L5.5 0L7.5 2.5L12 4L43 85.5L35 88.5L31.5 80.5L27 54.5L23.5 49.5L17 31L10.5 23L5.5 11Z"
                transform="translate(549 333)" fill="#EFC319" stroke="#EFC319" strokeWidth={state.items[0][1] ? 10 : 0}/>
              <path id="mark_2-0-2" d="M37.5 93.5L42.5 91.5C39.5 76.5 36 59.5 29.5 43.5C26.1034 35.1392 13.6667 10.6667 6.5 0L0 3.5C3.33333 9.16667 10.7 21.6 13.5 26C17 31.5 23.5 46 27 56C29.8 64 35.1667 84.3333 37.5 93.5Z"
                transform="translate(509.5 237)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][2] ? 10 : 0}/>
              <path id="mark_2-0-3" d="M439 200.333L432.5 203.833C428.833 199.333 421.76 187.998 417 183.833C413 180.333 394.167 167 385 161.833C369.833 153.833 337 135.933 327 128.333C320 122.833 317 115.833 307 102.833C299 92.433 278.667 79.1663 269.5 73.833L267 76.333L255 68.333V64.833L250.5 60.833L249 56.833L242 55.833L225.5 47.833C211.167 40.833 179.7 25.633 168.5 20.833C154.5 14.833 120.5 11.833 110.5 11.833C102.5 11.833 88.1667 14.1663 82 15.333C72.8 16.933 23 29.833 17.5 31.833C12 33.833 3 34.333 3 34.333L0 17.333C24.5 12.9998 78.5 3.63333 98.5 0.833333C123.5 -2.66667 148.5 5.83333 164 8.33333C176.4 10.3333 204.5 26.8333 217 34.8333L218.5 39.3333C231.833 45.8333 260.2 59.6333 267 62.8333C273.8 66.0333 299.167 84.8333 311 93.8333L342 121.833C360.333 135.833 399.8 165.633 411 172.833C422.2 180.033 434.333 194.167 439 200.333Z"
                transform="translate(77 36.667)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][3] ? 10 : 0}/>
              {/* Active */}
              <use xlinkHref={`#mark_2-0-${ getActive(0) || 0 }`} />
            </g>
          }
        </g>
      </Svg>
    </Fragment>
  )
}

export default MapsMarks

