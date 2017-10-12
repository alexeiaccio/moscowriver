import React, { Component } from "react";
import Helmet from "react-helmet";
import GoogleMapBackground from "../components/GoogleMapBackground/GoogleMapBackground";
import config from "../../gatsby-site-config";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <GoogleMapBackground />
      </div>
    );
  }
}

export default AboutPage;
