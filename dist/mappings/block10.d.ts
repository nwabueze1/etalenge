declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            menu_item_uuid: null;
            menu_item: {
                calories: null;
                created_at: string;
                description: string;
                image: string;
                name: string;
                options: string[];
                price: number;
                slug: string;
                status: number;
                menu: {
                    restaurant: {
                        bank_info: {
                            currency: string;
                        };
                    };
                    options_config: {
                        name: string;
                        type: string;
                        uuid: string;
                        options: {
                            deselection: {
                                amount: number;
                                name: string;
                            }[];
                            extras: {
                                amount: number;
                                name: string;
                            }[];
                            selection: {
                                amount: number;
                                name: string;
                            }[];
                        };
                    }[];
                    uuid: string;
                    name: string;
                    is_active: boolean;
                };
                related_menu_items: {
                    description: string;
                    created_at: string;
                    calories: null;
                    image: string;
                    name: string;
                    options: string[];
                    price: number;
                    slug: string;
                    uuid: string;
                }[];
            };
        };
        isSsr: boolean;
        ssr_network_operation: string;
        ssr_content_fields: string[];
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
                };
                button: {
                    100: string;
                    200: string;
                    300: string;
                };
                modal: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                };
                background: {
                    100: string;
                };
            };
        };
    };
    pages: string[];
    precedence: number;
};
export default _default;
