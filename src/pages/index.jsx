import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import WaterBackground from "../components/WaterBackground/WaterBackground";
import GoogleMapBackground from "../components/GoogleMapBackground/GoogleMapBackground";
import MapTooltips from "../components/MapTooltips/MapTooltips";
import config from "../../gatsby-site-config";
import "./index.scss";

class Index extends React.Component {
  render() {
    const quotesEdges = this.props.data.allMarkdownRemark.edges;
    const indexNode = this.props.data.markdownRemark;
    const index = indexNode.frontmatter;
    return (
      <div>
        <Helmet title={config.siteTitle} /> 
        <section className="index-container container-fluid"> 
          <WaterBackground />
          <div className="index-heading container">
            <h1>
              {index.heading}
            </h1>
            <p>
              {index.description}
            </p>          
          </div> 
        </section>    
        <section className="index-quotes">          
          <GoogleMapBackground />
          <div className='container mt-5'>          
            <MapTooltips quotesEdges={quotesEdges} />
          </div>
        </section>   
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const indexQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {type: {eq: "data"}, to: {eq: "mainpage"}}) {
      frontmatter {
        title
        heading
        description
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "quote"}}}) {
      edges {
        node {
          frontmatter {
            type
            sector
            embankment
            question
            human
          }
          html
        }
      }    
    }
  }  
`;
