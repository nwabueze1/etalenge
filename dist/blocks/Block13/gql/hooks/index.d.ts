export declare const useGetBlogPosts: () => (blog_uuid: string, page: number, search?: string) => Promise<{
    posts: any;
    paginatorInfo: any;
} | undefined>;
export declare const useGetCategoryPosts: () => (category_uuid: string, page: number) => Promise<{
    posts: any;
    paginatorInfo: any;
} | undefined>;
