export declare const useSearchMenuItems: () => (search: string, page: number) => Promise<{
    menuItems: {
        uuid: string | undefined;
        name: string;
        image: any;
        menu: Partial<import("../../../models").CoreMenuFields> | undefined;
        price: number;
        slug: string | undefined;
    }[];
    paginatorInfo: any;
} | undefined>;
export declare const useSearchPosts: () => (search: string, page: number) => Promise<{
    posts: any;
    paginatorInfo: any;
} | undefined>;
