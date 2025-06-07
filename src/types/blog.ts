type Blog = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    image: {
        id: string;
        name:string;
        url:string;
        documentId:string;
    },
    cta: {
        id: string;
        body: string;
        href: string;
    }
}

export type { Blog };