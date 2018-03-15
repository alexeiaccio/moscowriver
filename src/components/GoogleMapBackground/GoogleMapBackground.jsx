import React from "react";
import GoogleMap from "google-map-react";
import mapStyleArray from "./mapstyle";
import "./GoogleMapBackground.scss";

const API_KEY = 'AIzaSyAkA1UjP9WomYnEz-ge2K6dCM8UrOgM3h8';

function createMapOptions(maps) {
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: mapStyleArray,
    disableDefaultUI: true
  };
}

class GoogleMapBackground extends React.Component {
  static defaultProps = {
    center: { lat: 55.724828469160926, lng: 37.58707275390621 },
    zoom: 12
  };

  render() {
    return (
      <div className="google-map-background">
        <GoogleMap
          bootstrapURLKeys={{
            key: API_KEY,
            language: 'ru',
            region: 'ru',
          }}
          options={createMapOptions}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default GoogleMapBackground;
