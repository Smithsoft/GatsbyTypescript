import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';

import parse from 'html-react-parser';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Layout from '../components/layout';

import MarkdownNode from '../components/MarkdownNode';
import MarkdownData from '../components/MarkdownData';
import Head from '../components/head';

/**
 * When processing these templates, gatsby-node will import this query, run
 * it, and then expose it to the default component exported (here BlogPost)
 * via the 'props' of that component.
 */
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`;

class BlogPost extends React.Component<MarkdownData> {
    render(): ReactNode {
        const node: MarkdownNode = this.props.data.markdownRemark;
        return (
            <Layout>
                <Head title={node.frontmatter.title} />
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.date}</p>
                <div>{parse(node.html)}</div>
            </Layout>
        );
    }
}

export default BlogPost;
