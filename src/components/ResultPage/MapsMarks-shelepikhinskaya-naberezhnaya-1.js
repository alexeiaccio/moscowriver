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
  transform: ${({second}) => second ? 'scale(1.4) translate(80px, 70px)' : 'scale(1.4) translate(-80px, -70px)'};
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
  transform: ${({second}) => second ? 'scale(1.4) translate(80px, 70px)' : 'scale(1.4) translate(-80px, -70px)'};
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
      <Svg
        second={state.items[0][6] || state.items[1][3] ? true : false}
        viewBox="0 0 702 500" version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Canvas" fill="none">
          {state.activeList === 2 &&
            <g id="maps_2">
              <path id="mark_2-7" d="M 81.5 207.5L 75 185.5L 73 181.5L 70.5 172.5L 64.5 143.5L 55.5 122.5L 42 97.5L 36.5 84.5L 21.5 38L 0 0" transform="translate(511.5 242.5)" stroke="#C4549A" strokeWidth={state.items[2][7] ? 10 : 2} />
              <g id="mark_2-6" transform="translate(583 411)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[2][6] ? 10 : 0} >
                <path d="M 6 21.1845L 12.6504 19L 14.1292 23.5018L 7.47875 25.6863L 6 21.1845Z" />
                <path d="M 0 2.18452L 6.6504 0L 8.12916 4.50181L 1.47875 6.68633L 0 2.18452Z" />
              </g>
              <g id="mark_2-5" transform="translate(517 248.5)" fill="#00BDF2" stroke="#00BDF2" strokeWidth={state.items[2][5] ? 10 : 0} >
                <path d="M 50.0004 118.685L 56.6508 116.501L 58.1296 121.002L 51.4792 123.187L 50.0004 118.685Z" />
                <path d="M 22.3498 56.185L 29.0002 54.0005L 30.479 58.5023L 23.8286 60.6868L 22.3498 56.185Z" />
                <path d="M 0 3.5L 6 0L 8.5 4L 2.34984 7.68535L 0 3.5Z"/>
                <path d="M 35.5 71.5L 39 70.5L 41 76L 37.5 77L 35.5 71.5Z" />
                <path d="M 40.5 84L 44 83L 46 88.5L 42.5 89.5L 40.5 84Z" />
              </g>
              <g id="mark_2-4" transform="translate(518 239)" fill="#F05A5A" stroke="#F05A5A" strokeWidth={state.items[2][4] ? 10 : 0} >
                <path d="M 28 74.5C 28 75.8807 26.8807 77 25.5 77C 24.1193 77 23 75.8807 23 74.5C 23 73.1193 24.1193 72 25.5 72C 26.8807 72 28 73.1193 28 74.5Z" />
                <path d="M 68 78.5C 68 79.8807 66.8807 81 65.5 81C 64.1193 81 63 79.8807 63 78.5C 63 77.1193 64.1193 76 65.5 76C 66.8807 76 68 77.1193 68 78.5Z" />
                <path d="M 35 59C 35 60.3807 33.8807 61.5 32.5 61.5C 31.1193 61.5 30 60.3807 30 59C 30 57.6193 31.1193 56.5 32.5 56.5C 33.8807 56.5 35 57.6193 35 59Z" />
                <path d="M 65.5 70.5C 65.5 71.8807 64.3807 73 63 73C 61.6193 73 60.5 71.8807 60.5 70.5C 60.5 69.1193 61.6193 68 63 68C 64.3807 68 65.5 69.1193 65.5 70.5Z" />
                <path d="M 7.5 21C 7.5 22.3807 6.38071 23.5 5 23.5C 3.61929 23.5 2.5 22.3807 2.5 21C 2.5 19.6193 3.61929 18.5 5 18.5C 6.38071 18.5 7.5 19.6193 7.5 21Z" />
                <path d="M 5 2.5C 5 3.88071 3.88071 5 2.5 5C 1.11929 5 0 3.88071 0 2.5C 0 1.11929 1.11929 0 2.5 0C 3.88071 0 5 1.11929 5 2.5Z" />
              </g>
              <path id="mark_2-3" d="M 27 0L 0 9L 33.6957 102L 17.1957 111L 19.5 117.5" transform="translate(590 299)" stroke="#F0C41B" strokeWidth={state.items[2][3] ? 10 : 2} />
              <path id="mark_2-2" d="M 94.5 190.5L 79 196L 59 135L 46.5 96.5L 73.5 83M 35.5 78L 23 38.5L 0 0" transform="translate(516.5 238.5)" stroke="#3095BF" strokeWidth={state.items[2][2] ? 10 : 2} />
              <path id="mark_2-1" d="M 79.5 204.5L 63.5 147.5L 50.5 116L 38.5 97L 43 93.5L 50.5 111.5M 35 77.5L 22 38L 0 0" transform="translate(515 241)" stroke="#53B36C" strokeWidth={state.items[2][1] ? 10 : 2} />
              <path id="mark_2-0" d="M 103.5 56L 76.5 67.5L 106.461 148L 94.461 154L 91.6915 145.5L 67.1915 156L 59 128.5L 49.5 100L 42 81.5L 37 81.5L 22.5 37.5L 0 0" transform="translate(511.5 240.5)" stroke="#EB5A59" strokeWidth={state.items[2][0] ? 10 : 2} />
              {/* Active */}
              <use xlinkHref={`#mark_2-${ getActive(2) || 0 }`} />
            </g>
          }
          {state.activeList === 1 &&
            <g id="maps_1">
              <g id="mark_1-4" transform="translate(517 272)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][4] ? 10 : 0} >
                <path d="M 65.8704 135.717C 65.8704 139.859 62.5149 143.217 58.3756 143.217C 54.2364 143.217 50.8809 139.859 50.8809 135.717C 50.8809 131.575 54.2364 128.217 58.3756 128.217C 62.5149 128.217 65.8704 131.575 65.8704 135.717Z" />
                <path d="M 14.9896 7.5C 14.9896 11.6421 11.634 15 7.49478 15C 3.35553 15 0 11.6421 0 7.5C 0 3.35786 3.35553 0 7.49478 0C 11.634 0 14.9896 3.35786 14.9896 7.5Z" />
              </g>
                <ellipse id="mark_1-3" cx="7.49478" cy="7.5" rx="7.49478" ry="7.5" transform="translate(191.878 46.373)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][3] ? 10 : 0} />
                <ellipse id="mark_1-2" cx="7.49478" cy="7.5" rx="7.49478" ry="7.5" transform="translate(588 372)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][2] ? 10 : 0} />
                <ellipse id="mark_1-1" cx="7.49478" cy="7.5" rx="7.49478" ry="7.5" transform="translate(528.863 305.497)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][1] ? 10 : 0} />
                <ellipse id="mark_1-0" cx="7.49478" cy="7.5" rx="7.49478" ry="7.5" transform="translate(536 228)" fill="#EB5A59" stroke="#EB5A59" strokeWidth={state.items[1][0] ? 10 : 0} />
            </g>
          }
          {state.activeList === 0 &&
            <g id="maps_0">
              <path id="mark_0-0" d="M 45.6057 119.986C 34.853 104.418 29.6619 85.8838 24.8417 65.867C 19.3692 43.462 9.50106 23.6204 0 3.25376L 6.83464 0C 10.9481 6.74854 17.3117 17.7149 22.0083 30.0069C 26.7049 42.2989 31.3448 54.5909 35.7369 71.5828C 39.3253 85.4655 48.0704 107.013 51.9944 116.051L 45.6057 119.986Z" transform="translate(552.014 339.565)" fill="#945BA4" stroke="#945BA4" strokeWidth={state.items[0][0] ? 10 : 0} />
              <path id="mark_0-1" d="M 31.8875 78.493C 21.8763 52.5453 14.0898 26.5976 0 3.61529L 5.78044 0C 12.5243 10.0023 26.8068 33.1161 29.9861 45.5527C 33.1653 57.9893 38.2954 77.4878 40.4631 85.6824L 36.3465 89.2977C 34.8065 85.7393 33.3122 82.1429 31.8875 78.493Z" transform="translate(508.631 238.978)" fill="#C4549A" stroke="#C4549A" strokeWidth={state.items[0][1] ? 10 : 0} />
              <path id="mark_0-6" d="M 2.30324 33.5005L 0 17.3705C 13.271 14.3596 45.3409 7.24084 67.4519 2.85348C 95.0908 -2.63073 124.046 0.595276 158.594 5.75688C 186.233 9.88616 232.846 39.3073 252.698 53.5017L 250.395 57.3729C 237.418 50.4247 231.565 47.4201 215.541 39.6547C 204.717 34.4094 189.511 26.2882 179.323 22.8547C 147.736 12.2089 115.491 11.5637 89.8262 13.1767C 69.2945 14.4671 22.9227 27.2636 2.30324 33.5005Z" transform="matrix(1 9.90373e-05 -9.88996e-05 1 77.0068 40)" fill="#53B36C" stroke="#53B36C" strokeWidth={state.items[0][6] ? 10 : 0} />
              <path id="mark_0-3" d="M 11.9222 0L 0 5.78447L 4.33533 16.2688L 16.6188 10.1228L 11.9222 0Z" transform="translate(545.12 325.381)" fill="#000000" stroke="#000000" strokeWidth={state.items[0][3] ? 10 : 0} />
              <path id="mark_0-2" d="M 7.58683 0L 0 3.68102L 4.33533 14.1654L 12.2834 10.1228L 7.58683 0Z" transform="translate(580.877 427.373)" fill="#000000" stroke="#000000" strokeWidth={state.items[0][2] ? 10 : 0} />
              <path id="mark_0-4" d="M 13.5933 0L 0 9.04179L 8.15911 22.6443L 21.7655 15.1843L 13.5933 0Z" transform="matrix(0.877177 -0.480168 0.479654 0.877458 449.877 186.824)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][4] ? 10 : 0} />
              <path id="mark_0-5" d="M 9.45455 0L 0 4.2L 4.36364 14L 13.8182 10.85L 16 4.2L 9.45455 0Z" transform="translate(567.877 383.373)" fill="#F0C41B" stroke="#F0C41B" strokeWidth={state.items[0][5] ? 10 : 0} />
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

