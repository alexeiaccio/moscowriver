import React, { Component } from "react";
import Helmet from "react-helmet";
import GoogleMapBackground from "../components/GoogleMapBackground/GoogleMapBackground";
import MapTooltip from "../components/MapTooltip/MapTooltip";
import config from "../../gatsby-site-config";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <GoogleMapBackground />
        <div className='row'>
          <MapTooltip className="col" id='01' text='First' content='First content'/>
          <MapTooltip className="col" id='02' text='Second' content='Second content'/>
        </div>        
      </div>
    );
  }
}

export default AboutPage;
