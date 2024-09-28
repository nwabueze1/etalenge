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
            cards: {
                title: string;
                subtitle: string;
            }[];
            buttons: {
                text: string;
                url: string;
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
                };
                button: {
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
                width: number;
                height: number;
            };
            tablet: {
                defaultSize: number;
                width: number;
                height: number;
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
