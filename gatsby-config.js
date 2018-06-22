require('dotenv').config({
  path: '.env.${process.env.NODE_ENV}'
})

module.exports = {
  siteMetadata: {
    title: 'Москвичи о реке',
    siteUrl: 'http://river.moscow.stories',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'mymoscowriverru',
        accessToken: process.env.PRISMIC_TOKEN || 'MC5Xc1NrSWlRQUFDUUFoRF9s.AO-_ve-_ve-_vTt-b--_vWfvv73vv71i77-977-9DU1iDygm77-9OVYl77-9Iu-_vQzvv73vv70Q77-9',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'podkova\:400,500',
          'montserrat\:400,500,600'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [
          'poop'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Москвичи о реке',
        short_name: 'Москва-река',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '49341592',
        webvisor: false,
        trackHash: false,
      },
    },
  ],
}
