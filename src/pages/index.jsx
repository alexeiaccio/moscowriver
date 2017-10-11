import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../gatsby-site-config";
import "./index.scss";

class Index extends React.Component {
  render() {
    const indexNode = this.props.data.markdownRemark;
    const index = indexNode.frontmatter;
    return (
      <div className="index-container container">
        <Helmet title={config.siteTitle} />  
        <div>
          <h1>
            {index.heading}
          </h1>
          <p>
            {index.description}
          </p>          
        </div>      
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {layout: {eq: "index"}}) {
      frontmatter {
        title
        heading
        description
      }
    }
  }
`;
