import type { GatsbyConfig } from "gatsby"
import path from "path";

const config: GatsbyConfig = {
  // Change this according to your repository name
  pathPrefix: `/NocturnalProject`,
  siteMetadata: {
    title: `Nocturnal Project`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.resolve(__dirname, "src/assets/svg"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nocturnal Project`,
        short_name: `Nocturnal`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: "src/assets/images/icon.png",
      },
    },
  ],
}

export default config
