const path = require('path');

/** TODO: Convert to Typescript:
 * https://www.extensive.one/converting-gatsby-config-and-node-api-to-typescript/
 */

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions;

    /** Note that a MarkdownRemark node will get created for CMS content, but such
     * content will be from eg Contentful web-service and not have a file path.
     * For these nodes we don't do anything as they already have a slug, and also
     * have no path value.
     */
    if (
        node.internal.type === 'MarkdownRemark' &&
        node.fileAbsolutePath !== undefined
    ) {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField({ node, name: 'slug', value: slug });
    }
};

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogTemplate = path.resolve(`./src/templates/blog-post.tsx`);
    const cmsBlogTemplate = path.resolve(`./src/templates/cms-blog-post.tsx`);

    const result = await graphql(`
        query {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/.+/" } }) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    result.data.allMarkdownRemark.edges.forEach(edge => {
        if (edge.node.fields !== null) {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug,
                },
            });
        }
    });
    result.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: cmsBlogTemplate,
            path: `/cmsblog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            },
        });
    });
};
