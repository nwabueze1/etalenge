declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: {
                title: string;
            };
            blog_uuid: null;
            posts: {
                title: string;
                slug: string;
                featured_image: string;
                excerpt: string;
                created_at: string;
                published_at: string;
                categories: {
                    name: string;
                    uuid: string;
                    __typename: string;
                }[];
                __typename: string;
            }[];
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
                    800: string;
                    900: string;
                };
                button: {
                    100: string;
                    200: string;
                    300: string;
                };
                background: {
                    100: string;
                };
            };
        };
        ssr_network_operation: string;
        ssr_network_identifier: string;
    };
    pages: string[];
    precedence: number;
};
export default _default;
