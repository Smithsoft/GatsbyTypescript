import MarkdownNode from './MarkdownNode';

export default interface MarkdownPosts {
    allMarkdownRemark: {
        edges: [MarkdownNode];
    };
}
