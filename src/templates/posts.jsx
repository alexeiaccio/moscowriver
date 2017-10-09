import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import PostListing from "../components/PostListing/PostListing";
import config from "../../gatsby-site-config";
import "./post.css";

export default class PostsTemplate extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <div>
          <PostListing postEdges={postEdges} />         
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`  
  query PostsQuery {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "post"}}}) {
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
