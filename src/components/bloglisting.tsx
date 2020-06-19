import React from 'react';
import { MarkdownNode } from './MarkdownNode';

const BlogListing = (props: { children: MarkdownNode }): React.ReactElement => {
    return (
        <li>
            <h2>{props.children.node.frontmatter.title}</h2>
            <p>{props.children.node.frontmatter.date}</p>
        </li>
    );
};

export default BlogListing;
