import React, { Component } from "react";
import Helmet from "react-helmet";
import GoogleMapBackground from "../components/GoogleMapBackground/GoogleMapBackground";
import MapTooltip from "../components/MapTooltip/MapTooltip";
import config from "../../gatsby-site-config";

class AboutPage extends Component {
  render() {
    const aboutNode = this.props.data.markdownRemark;
    const about = aboutNode.frontmatter;

    return (

      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <GoogleMapBackground />
        <div className='row'>
          <MapTooltip className="col" id='01' text='First' content={aboutNode.html}/>
          <MapTooltip className="col" id='02' text='Second' content='Second content'/>
        </div>        
      </div>
    );
  }
}

export default AboutPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: {type: {eq: "quote"}}) {
      frontmatter {
        type
        sector
        human
        age
      }
      html
    }
  }
`;