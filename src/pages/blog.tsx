import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Layout from '../components/layout';

import MarkdownPosts from '../components/MarkdownPosts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BlogListing from '../components/bloglisting';

const BlogPages = (): React.ReactElement => {
    const data: MarkdownPosts = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    console.log(data);
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(edge => {
                    return <BlogListing>{edge.node}</BlogListing>;
                })}
            </ol>
        </Layout>
    );
};

export default BlogPages;
