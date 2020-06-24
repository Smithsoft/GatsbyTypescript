export default interface MarkdownNode {
    frontmatter: {
        title: string;
        date: string;
    };
    html: string;
    excerpt: string;
    fields: {
        slug: string;
    };
}
