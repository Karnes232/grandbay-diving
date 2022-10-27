module.exports = {
  siteMetadata: {
    title: `Scuba Diving in Punta Cana made easy`,
    description: `Scuba Dive in Punta Cana and the Dominican Republic with a certified instructor and smaller more personalized diving groups`,
    keywords: `scuba diving in punta cana, punta cana dive sites, punta cana scuba diving, punta cana excursions, diving punta cana`,
    url: `https://www.grandbay-puntacana.com`,
    siteUrl: `https://www.grandbay-puntacana.com`,
    author: `@GrandBayOfTheS1`,
    image: "https://i.ibb.co/mcHjrpT/logo01.jpg",
  },
  plugins: [
    `gatsby-plugin-netlify`,
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
