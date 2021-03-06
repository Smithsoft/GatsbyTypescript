import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Layout from '../components/layout';

import MarkdownPosts from '../components/MarkdownPosts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BlogListing from '../components/bloglisting';

import blogStyles from './blog.module.scss';
import CMSPosts from '../components/CMSPosts';
import Head from '../components/head';

const CMSBlogPages: React.FC = (): JSX.Element => {
    const data: CMSPosts = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                        body {
                            json
                        }
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <Head title="Content" />
            <h1>Blog from Contentful</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => {
                    return <BlogListing>{edge.node}</BlogListing>;
                })}
            </ol>
        </Layout>
    );
};

export default CMSBlogPages;
