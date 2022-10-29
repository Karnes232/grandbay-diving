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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-offline",
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
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "G-6MJLJ90SSM",
    //     head: true,
    //     anonymize: true,
    //     respectDNT: true,
    //     exclude: ["/preview/**", "/tui/**"],
    //     pageTransitionDelay: 0,
    //     defer: false,
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     enableWebVitalsTracking: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: ["G-6MJLJ90SSM", "GTM-KGLHKQW"],
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     pluginConfig: {
    //       head: false,
    //       respectDNT: true,
    //       exclude: ["/preview/**", "/tui/**"],
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-KGLHKQW",

    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },

    //     enableWebVitalsTracking: true,
    //   },
    // },
  ],
}
