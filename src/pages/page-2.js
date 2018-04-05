import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Map from '../components/Map'

const MapWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const SecondPage = () => (
  <div>
    <MapWrapper>
      <Map />
    </MapWrapper>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
