declare const _default: {
    uuid: string;
    component: string;
    config: {
        ssr_network_operation: string;
        ssr_content_fields: string[];
        content: {
            text: {
                title: string;
            };
            menu_item_uuids: null;
            menu_items: ({
                uuid: string;
                name: string;
                slug: string;
                description: string;
                image: string;
                price: number;
                options: string[];
                calories: string;
                menu: {
                    uuid: string;
                    name: string;
                    is_active: boolean;
                    menuCategories: {
                        title: string;
                        uuid: string;
                        status: boolean;
                        position: number;
                        description: string;
                        created_at: string;
                    }[];
                    options_config: {
                        name: string;
                        type: string;
                        options: {
                            selection: {
                                name: string;
                                amount: number;
                            }[];
                            deselection: {
                                name: string;
                                amount: number;
                            }[];
                            extras: {
                                name: string;
                                amount: number;
                            }[];
                        };
                        uuid: string;
                    }[];
                    restaurant: {
                        uuid: string;
                        name: string;
                        description: null;
                        email: null;
                        phone: null;
                        cover_image: null;
                        bank_info: {
                            currency: string;
                            bank_name: null;
                            account_name: null;
                            account_number: null;
                            delivery_fee: null;
                        };
                        location: {
                            address1: string;
                            address2: string;
                            country: string;
                            state: string;
                        };
                        deliveryInformation: null;
                    };
                };
            } | {
                uuid: string;
                name: string;
                slug: string;
                description: string;
                image: string;
                price: number;
                options: string[];
                calories: null;
                menu: {
                    uuid: string;
                    name: string;
                    is_active: boolean;
                    menuCategories: {
                        title: string;
                        uuid: string;
                        status: boolean;
                        position: number;
                        description: string;
                        created_at: string;
                    }[];
                    options_config: {
                        name: string;
                        type: string;
                        options: {
                            selection: {
                                name: string;
                                amount: number;
                            }[];
                            deselection: {
                                name: string;
                                amount: number;
                            }[];
                            extras: {
                                name: string;
                                amount: number;
                            }[];
                        };
                        uuid: string;
                    }[];
                    restaurant: {
                        uuid: string;
                        name: string;
                        description: null;
                        email: null;
                        phone: null;
                        cover_image: null;
                        bank_info: {
                            currency: string;
                            bank_name: null;
                            account_name: null;
                            account_number: null;
                            delivery_fee: null;
                        };
                        location: {
                            address1: string;
                            address2: string;
                            country: string;
                            state: string;
                        };
                        deliveryInformation: null;
                    };
                };
            })[];
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
