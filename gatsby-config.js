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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `podkova\:400`,
          `montserrat\:400,500,600,700` // you can also specify font weights and styles
        ]
      }
    }
  ],
}
