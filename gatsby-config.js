require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: '390 взглядов на Москву-реку',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `mymoscowriverru`,
        accessToken: process.env.PRISMIC_TOKEN,
      },
    },
  ],
}
