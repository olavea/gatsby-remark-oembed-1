module.exports = {
  plugins: [
    "gatsby-theme-docz",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-remark-oembed`,
        short_name: `gatsby-remark-oembed`,
        start_url: `/`,

        icon: `src/images/Benedicte_eye_1.png`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
