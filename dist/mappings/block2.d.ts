declare const _default: {
    uuid: string;
    component: string;
    config: {
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
                };
            };
        };
        mode: string;
        ssr_network_operation: string;
        ssr_content_fields: string[];
        content: {
            form_uuid: null;
            form: {
                uuid: string;
                site_uuid: string;
                title: string;
                author: string;
                status: string;
                questions: {
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: never[];
                    __typename: string;
                }[];
                setting: {
                    uuid: string;
                    end_date: null;
                    allow_multiple_responses: boolean;
                    response_limit: number;
                    submission_text: string;
                    notification_email: string;
                    __typename: string;
                };
                __typename: string;
            };
            text: {
                main: string;
                body: string;
            };
            footerLinks: ({
                name: string;
                links: {
                    text: string;
                    url: string;
                }[];
            } | {
                name: string;
                links: ({
                    text: string;
                    url: string;
                    name: string;
                    not_url: boolean;
                    links?: undefined;
                } | {
                    text: string;
                    url: string;
                    name: string;
                    not_url?: undefined;
                    links?: undefined;
                } | {
                    name: string;
                    links: {
                        icon: string;
                        url: string;
                    }[];
                    text?: undefined;
                    url?: undefined;
                    not_url?: undefined;
                })[];
            })[];
            icons: {
                type: string;
                url: string;
            }[];
        };
    };
    precedence: number;
    pages: string[];
};
export default _default;
