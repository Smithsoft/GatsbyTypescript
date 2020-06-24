import React from 'react';

import MarkdownNode from './MarkdownNode';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from 'gatsby';

import bloglistingStyles from './bloglisting.module.scss';
import CMSNode from './CMSNode';

type NodeType = MarkdownNode | CMSNode;

// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#typing-defaultprops
type BlogListingProps = {
    children: NodeType;
};

type BlogListingState = {
    node: NodeType;
};

class BlogListing extends React.Component<BlogListingProps, BlogListingState> {
    state = {
        node: this.props.children,
    };

    isCMSNode(node: NodeType): node is CMSNode {
        return (node as CMSNode).title !== undefined;
    }

    slug(): string {
        if (this.isCMSNode(this.state.node)) {
            return this.state.node.slug;
        } else {
            return this.state.node.fields.slug;
        }
    }

    title(): string {
        if (this.isCMSNode(this.state.node)) {
            return this.state.node.title;
        } else {
            return this.state.node.frontmatter.title;
        }
    }

    date(): string {
        if (this.isCMSNode(this.state.node)) {
            return this.state.node.publishedDate;
        } else {
            return this.state.node.frontmatter.date;
        }
    }

    render(): React.ReactElement {
        if (this.props === undefined) {
            return <h2>Loading...</h2>;
        }
        return (
            <li className={bloglistingStyles.post} key={this.slug()}>
                <Link to={this.slug()}>
                    <h2>{this.title()} </h2>
                    <p>{this.date()}</p>
                </Link>
            </li>
        );
    }
}

export default BlogListing;
