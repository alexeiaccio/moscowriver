import React from 'react'
import styled from 'styled-components'
import GoogleMap from 'google-map-react'
import mapStyles from './mapStyles'

const Div = styled.div`
  height: 200%;
  width: 200%;
  position: absolute;
  top: -150%;
  left: -150%;
  transform: translate(50%, 50%) scale(.55);
`

const API_KEY = process.env.GOOGLE_MAP_APY_KEY || 'AIzaSyAkA1UjP9WomYnEz-ge2K6dCM8UrOgM3h8'

const createMapOptions = maps => ({
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: mapStyles,
    disableDefaultUI: true
  })

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 55.724828469160926,
      lng: 37.58707275390621
    },
    zoom: 13,
  }

  render() {
    return (
      <Div>
        <GoogleMap
          bootstrapURLKeys={{
            key: API_KEY,
            language: 'ru',
            region: 'ru',
          }}
          options={createMapOptions}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} />
      </Div>
    )
  }
}

export default Map