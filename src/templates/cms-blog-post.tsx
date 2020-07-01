/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import { graphql } from 'gatsby';
import CMSContent from '../components/CMSContent';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Node } from '@contentful/rich-text-types';

/**
 * 1) Write a GraphQL dynamic query to fetch the post
 *
 * export const query = graphql`....`;
 *
 * - Create a type interface for the content
 * */
export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
            slug
            title
            publishedDate(formatString: "MMMM Do YYYY")
            body {
                json
            }
        }
    }
`;

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

class CMSBlogPost extends React.Component<CMSContent> {
    render(): ReactNode {
        console.log(this.props);
        const title = this.props.data.contentfulBlogPost.title;
        const dateOfPublish = this.props.data.contentfulBlogPost.publishedDate;
        const content = this.props.data.contentfulBlogPost.body.json;
        const options = {
            renderNode: {
                'embedded-asset-block': (node: Node): ReactNode => {
                    const alt = node.data.target.fields.title['en-US'];
                    const url = node.data.target.fields.file['en-US'].url;
                    return <img alt={alt} src={url} />;
                },
            },
        };
        return (
            <Layout>
                <Head title={title} />
                <h1>{title}</h1>
                <p>{dateOfPublish}</p>
                {documentToReactComponents(content, options)}
            </Layout>
        );
    }
}

export default CMSBlogPost;
