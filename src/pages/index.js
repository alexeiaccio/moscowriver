import React from 'react'
import Link from 'gatsby-link'

class Index extends React.Component {
  render() {
    const pages = this.props.data.allMarkdownRemark.edges

    return (
      <ul>
        {pages.map(page => (
          <li key={page.node.fields.slug}>
            <Link to={page.node.fields.slug}>
              {page.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    )      
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
