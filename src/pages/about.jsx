import React, { Component } from "react";
import Helmet from "react-helmet";
import GoogleMapBackground from "../components/GoogleMapBackground/GoogleMapBackground";
import MapTooltip from "../components/MapTooltip/MapTooltip";
import config from "../../gatsby-site-config";

class AboutPage extends Component {    

  render() {  
    const quoteEdges = this.props.data.allMarkdownRemark.edges;    

    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <GoogleMapBackground />
        <div className='container mt-5'>          
          <MapTooltip quoteEdges={quoteEdges} />
        </div>        
      </div>
    );
  }
}

export default AboutPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "quote"}}}) {
      edges {
        node {
          frontmatter {
            type
            sector
            question
            human
            age
          }
          html
        }
      }    
    }
  }
`;