require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Formula One Gym`,
    description: `Nottingham's favourite city centre gym`,
    author: `@Zellenent`,
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
    `gatsby-plugin-postcss`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        whitelist: ['order-1','order-0'],
        whitelistPatterns: [/is-active/, 'order$'],
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `raleway\:300,700`,
    //       `sedgwick-ave\:400`
    //     ],
    //     display: 'swap'
    //   }
    // },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `formula1gym`,
        accessToken: `${process.env.API_KEY}`,
        //linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    // {
    //   resolve: `gatsby-source-datocms`,
    //   options: {
    //     apiToken: process.env.DATO_API_KEY,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `formula1gym`,
        short_name: `formula1gym`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/f1-icon.png`,
      },
    },
  ],
}
