/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Sarah's Site",
        author: 'Sarah Smith',
        name: 'Basic Gatsby Typescript Blog',
        tagline: 'Gatsby + SASS + Typescript',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-typescript',
        'gatsby-plugin-eslint',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        'gatsby-transformer-remark',
    ],
};
