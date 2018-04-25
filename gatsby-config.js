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
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `mymoscowriverru`,
        accessToken: process.env.PRISMIC_TOKEN || 'MC5Xc1NrSWlRQUFDUUFoRF9s.AO-_ve-_ve-_vTt-b--_vWfvv73vv71i77-977-9DU1iDygm77-9OVYl77-9Iu-_vQzvv73vv70Q77-9',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `podkova\:400,500,600,700`,
          `montserrat\:400,500,600,700`
        ]
      }
    }
  ],
}
