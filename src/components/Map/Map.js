import React from 'react'
import GoogleMap from 'google-map-react'
import mapStyles from './mapStyles'
import { MapWrapper, MapBlock } from 'Styled'

const API_KEY = process.env.GOOGLE_MAP_APY_KEY || 'AIzaSyAkA1UjP9WomYnEz-ge2K6dCM8UrOgM3h8'

const createMapOptions = maps => ({
    panControl: false,
    mapTypeControl: false,
    scrollwheel: true,
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
      <MapWrapper>
        <MapBlock>
          <GoogleMap
            bootstrapURLKeys={{
              key: API_KEY,
              language: 'ru',
              region: 'ru',
            }}
            options={createMapOptions}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom} />
        </MapBlock>
      </MapWrapper>
    )
  }
}

export default Map