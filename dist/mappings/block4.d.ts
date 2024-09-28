declare const _default: {
    uuid: string;
    component: string;
    config: {
        configuration: {
            colors: {
                main: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
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
            fonts: {
                heading: string;
                body: string;
            };
        };
        content: {
            text: {
                heading: string;
            };
            buttons: {
                text: string;
                url: string;
            }[];
            post_uuids: null;
            posts: {
                featured_image: string;
                slug: string;
                title: string;
                uuid: string;
                category_name: string;
            }[];
        };
        mode: string;
        ssr_network_operation: string;
        ssr_content_fields: string[];
    };
    precedence: number[];
    pages: string[];
};
export default _default;
