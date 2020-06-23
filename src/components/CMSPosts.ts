import CMSNode from './CMSNode';

export default interface CMSPosts {
    allContentfulBlogPost: {
        edges: [{ node: CMSNode }];
    };
}
