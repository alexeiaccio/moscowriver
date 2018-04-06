import React from 'react'
import styled from 'styled-components'
import Map from './Map'

const MapWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const WrapedMap = () => (
  <MapWrapper>
    <Map />
  </MapWrapper>
)

export default WrapedMap