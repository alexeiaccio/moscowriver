import React from 'react'
import styled from 'styled-components'
import GoogleMap from 'google-map-react'
import mapStyles from './mapStyles'
import MapBack from '../../assets/MapBack.png'

const Div = styled.div`
  height: 2000px;
  width: 3500px;
  flex: 0 0 auto;
  margin-top: calc(50vh - 977px);
  transform: scale(.55);
  background: url(${MapBack});
  & div {
    background-color: rgba(255,255,255,0) !important;
  }
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