declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            post_uuid: null;
            post: {
                author: {
                    avatar: string;
                    email: string;
                    firstname: string;
                    lastname: string;
                    name: string;
                };
                content: string;
                created_at: string;
                excerpt: string;
                featured_image: string;
                id: string;
                slug: string;
                language_attr: string;
                published_at: string;
                related_posts: {
                    featured_image: string;
                    excerpt: string;
                    created_at: string;
                    content: string;
                    slug: string;
                    tags: {
                        uuid: string;
                        name: string;
                    }[];
                    category_name: string;
                    uuid: string;
                    title: string;
                }[];
                title: string;
                uuid: string;
            };
        };
        configuration: {
            fonts: {
                heading: string;
                body: string;
            };
            colors: {
                main: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                };
                background: {
                    100: string;
                };
            };
        };
        ssr_network_operation: string;
        ssr_content_fields: string[];
    };
    precedence: number;
    pages: string[];
};
export default _default;
