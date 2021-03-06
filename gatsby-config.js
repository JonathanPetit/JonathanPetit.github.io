module.exports = {
  pathPrefix: "/JonathanPetit.github.io",
  siteMetadata: {
    title: `Jonathan Petit`,
    description: `Personal site`,
    author: `Jonathan Petit`,
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
  ],
}
