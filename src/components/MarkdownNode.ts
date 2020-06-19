export default interface MarkdownNode {
    node: {
        frontmatter: {
            title: string;
            date: string;
        };
    };
    html: string;
    excerpt: string;
}
