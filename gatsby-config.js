module.exports = {
  siteMetadata: {
    title: `Nicolas Moyano`,
    description: `A Digital Art director & Product Designer With Focus On User Experience`,
    author: `@NicolasMoyano`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFBF5`,
        theme_color: `#FFFBF5`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },

      {
        resolve: 'gatsby-source-google-sheets',
        options: {
            // spreadsheetId: '1UjEDYiacBww9HAeRzX3QF6W6u-8d00g2LV0j1lTPi-E',
            spreadsheetId: '2PACX-1vSglb9KS4EYiTxTAa9Pxd87oiPwy_5t6IWF9BYIJtckidNMAEc9Jtq1Aa-rqi1kBvPFwIul2yeQr5yy/pubhtml?gid=0&single=true',
            worksheetTitle: 'portfolio',
            credentials: require('../myApp/src/client_secret.json')
        }
    },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
