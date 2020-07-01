/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

/** 
 * 1) Write a GraphQL dynamic query to fetch the post
 *
 * export const query = graphql`....`;
 * 
 * - Create a type interface for the content
 * */

/** 
 * 2) Create a React component to render the post
 * 
 * - Make the component typed on the content
 * - Include the title in the head, and h1 
 * - Include the published date
 * - Call documentToReactComponents to render the content
 * - Render the images by passing in a renderNode handler:
 *      const options = {
            renderNode: {
                'embedded-asset-block': () => {
                    return <img alt={alt} src={url} />;
                },
            },
        };
*/

const CMSBlogPost = () => {
    return (
        <Layout>
            <Head title="Contentful Blog Post" />
            <h1>Contentful Blog Post</h1>
            <p>Date: Just now</p>
            <p>Content here.</p>
        </Layout>
    );
};

export default CMSBlogPost;
