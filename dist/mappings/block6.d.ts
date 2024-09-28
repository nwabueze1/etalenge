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
                };
                button: {
                    100: string;
                    200: string;
                };
                background: {
                    100: string;
                };
            };
        };
        content: {
            text: {
                heading: string;
            };
            site_uuid: null;
            images: {
                image: {
                    src: string;
                };
            }[];
            ssr_network_operation: string;
        };
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
                height: number;
                width: number;
            };
        };
    };
    pages: string[];
    precedence: number[];
};
export default _default;
