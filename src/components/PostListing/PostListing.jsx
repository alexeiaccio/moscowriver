import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        template: postEdge.node.frontmatter.template,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post =>
          <Link to={post.path} key={post.title}>
            <h1>
              {post.title} {post.template}
            </h1>
          </Link>
        )}
      </div>
    );
  }
}

export default PostListing;
