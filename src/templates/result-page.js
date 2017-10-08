import React from "react";
import Helmet from "react-helmet";

class ResultPage extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    return (
      <div>
        <h1>
          {page.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    )
  }
}

export default ResultPage

export const pageQuery = graphql`
  query ResultPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
