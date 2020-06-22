import React from 'react';
import MarkdownNode from './MarkdownNode';
import { Link } from 'gatsby';

import bloglistingStyles from './bloglisting.module.scss';

const BlogListing = (props: { children: MarkdownNode }): React.ReactElement => {
    const node = props.children;
    return (
        <li className={bloglistingStyles.post} key={node.fields.slug}>
            <Link to={node.fields.slug}>
                <h2>{node.frontmatter.title} </h2>
                <p>{node.frontmatter.date}</p>
            </Link>
        </li>
    );
};

export default BlogListing;
