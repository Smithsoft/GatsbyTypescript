import { Document } from '@contentful/rich-text-types';

export default interface CMSNode {
    title: string;
    slug: string;
    publishedDate: string;
    body: {
        json: Document;
    };
}
