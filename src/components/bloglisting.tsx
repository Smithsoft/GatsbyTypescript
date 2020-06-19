import React from 'react';
import MarkdownNode from './MarkdownNode';
import { Link } from 'gatsby';

const BlogListing = (props: { children: MarkdownNode }): React.ReactElement => {
    const node = props.children;
    return (
        <li key={node.fields.slug}>
            <h2>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.date}</p>
        </li>
    );
};

export default BlogListing;
