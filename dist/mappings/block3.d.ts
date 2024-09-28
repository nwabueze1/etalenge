declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: {
                title: string;
            };
            comments: {
                title: string;
                description: string;
                userName: string;
                userDescription: string;
                image: {
                    src: string;
                };
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
                };
                background: {
                    100: string;
                };
            };
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
    precedence: number[];
    pages: string[];
};
export default _default;
