const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const ResultTemplate = path.resolve('src/templates/result-template.js')

    resolve(
      graphql(
        `
        {
          allPrismicDocument(filter: {type: {eq: "result"}}) {
            edges {
              node  {
                uid
              }
            }
          }
        }
        `
      ).then(result => {
        if(result.errors) {
          reject(result.errors)
        }

        result.data.allPrismicDocument.edges.forEach(({ node }) => {
          const path = node.uid
          createPage({
            path,
            component: ResultTemplate,
            context: {
              slug: path
            }
          })
        })
      })
    )
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      root: path.resolve(__dirname),
      alias: {
        Components: 'src/components/',
        Helpers: 'src/helpers/',
        Styled: 'src/components/Styled',
      },
      extensions: ['', '.js', '.jsx']
    }
  })
}