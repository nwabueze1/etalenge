declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: {
                heading: string;
                subheading: string;
            };
            image: {
                src: string;
            };
            form_uuid: null;
            form: {
                uuid: string;
                site_uuid: string;
                title: string;
                author: string;
                status: string;
                questions: ({
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: {
                        character_limit: null;
                        default_country_code?: undefined;
                    };
                    __typename: string;
                } | {
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: {
                        default_country_code: string;
                        character_limit?: undefined;
                    };
                    __typename: string;
                } | {
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: never[];
                    __typename: string;
                } | {
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: {
                        character_limit: string;
                        default_country_code?: undefined;
                    };
                    __typename: string;
                })[];
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
        ssr_content_fields: string[];
        imageCropper: {
            desktop: {
                defaultSize: number;
                height: number;
                width: number;
            };
            tablet: {
                defaultSize: number;
                height: number;
                width: number;
            };
            mobile: {
                defaultSize: number;
                width: number;
                height: number;
            };
        };
    };
    pages: string[];
    precedence: number;
};
export default _default;
