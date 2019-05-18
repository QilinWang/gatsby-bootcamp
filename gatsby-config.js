/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // http://localhost:8000/___graphql only works with development
  siteMetadata: {// has to be this name
    title:"Milk Shogun",
    author:"Qilin Wang"
  },

  plugins: [`gatsby-plugin-sass`,
  {
    resolve:'gatsby-plugin-web-font-loader',
    options:{
      google: {
        families:['PT Sans','Alice','Kurale','B612',
        'Poppins',
        'Vollkorn','Cinzel Decorative']
      }
    }
  },
  'gatsby-plugin-react-helmet',
  // above and below are two ways to write plugin
  // below you can set up
  {
    resolve:'gatsby-source-filesystem',
    options:{
      name:'src',
      path:`${__dirname}/src/`
    }
  },
  {
    resolve:'gatsby-source-contentful',
    options:{
      spaceId:process.env.CONTENTFUL_SPACE_ID,
      accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
    }
  },
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options:{
      plugins: [
        'gatsby-remark-relative-images',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 750,
            linkImagesToOriginal: false
          }
        }
      ]
    }

  }
]
}