import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Node } from '@contentful/rich-text-types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Layout from '../components/layout';
import Head from '../components/head';
import CMSContent from '../components/CMSContent';

export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`;

type ContentfulBody = any;

class CMSBlogPost extends React.Component<CMSContent> {
    render(): ReactNode {
        const options = {
            renderNode: {
                'embedded-asset-block': (node: Node): JSX.Element => {
                    const alt = node.data.target.fields.title['en-US'];
                    const url = node.data.target.fields.file['en-US'].url;
                    return <img alt={alt} src={url} />;
                },
            },
        };
        return (
            <Layout>
                <Head title={this.props.data.contentfulBlogPost.title} />
                <h1>{this.props.data.contentfulBlogPost.title}</h1>
                <p>{this.props.data.contentfulBlogPost.publishedDate}</p>
                {documentToReactComponents(
                    this.props.data.contentfulBlogPost.body.json,
                    options
                )}
            </Layout>
        );
    }
}

export default CMSBlogPost;
