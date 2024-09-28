declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            blocks: {
                title: string;
                image: {
                    src: string;
                };
                button: {
                    text: string;
                    url: string;
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
    precedence: number;
};
export default _default;
