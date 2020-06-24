import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Layout from '../components/layout';

import MarkdownPosts from '../components/MarkdownPosts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BlogListing from '../components/bloglisting';

import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPages = (): React.ReactElement => {
    const data: MarkdownPosts = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/.+/" } }) {
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
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map(edge => {
                    return <BlogListing>{edge.node}</BlogListing>;
                })}
            </ol>
        </Layout>
    );
};

export default BlogPages;
