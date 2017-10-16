import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import ContactForm from "../components/ContactForm/ContactForm";
import SEO from "../components/SEO/SEO";
import config from "../../gatsby-site-config";



class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <PostListing postEdges={postEdges} />
        <ContactForm />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: {frontmatter: {template: {ne: "post"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            template
          }
        }
      }
    }
  }
`;
