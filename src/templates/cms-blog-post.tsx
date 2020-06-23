import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Layout from '../components/layout';

export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
        }
    }
`;

class CMSBlogPost extends React.Component<{
    data: { contentfulBlogPost: { title: string } };
}> {
    render(): ReactNode {
        return (
            <Layout>
                <h1>{this.props.data.contentfulBlogPost.title}</h1>
            </Layout>
        );
    }
}

export default CMSBlogPost;
