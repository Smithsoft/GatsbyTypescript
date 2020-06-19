const path = require('path');

/** TODO: Convert to Typescript:
 * https://www.extensive.one/converting-gatsby-config-and-node-api-to-typescript/
 */

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField({ node, name: 'slug', value: slug });
    }
};

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogTemplate = path.resolve(`./src/templates/blog-post.tsx`);

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug,
            },
        });
    });
};