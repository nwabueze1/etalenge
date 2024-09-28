export default {
    uuid: "c1bb8f51-31cb-4b80-b5fc-4af9fb524a5a",
    component: "EleganteBlock2",
    config: {
        configuration: {
            fonts: {
                heading: "fonts.heading",
                body: "fonts.body",
            },
            colors: {
                main: {
                    100: "neutral.200",
                    200: "primary.main",
                    300: "neutral.main",
                    400: "neutral.400",
                    500: "neutral.100",
                    600: "primary.400",
                },
            },
        },
        mode: "view",
        ssr_network_operation: "GET_FORM",
        ssr_content_fields: ["form"],
        content: {
            form_uuid: null,
            form: {
                uuid: "947870ed-75d5-480e-a07a-6c4ed8f48a99",
                site_uuid: "d93bf217-fe51-44de-ab36-ca9211d12e71",
                title: "Newsletter",
                author: "Basit@smail.com",
                status: "1",
                questions: [
                    {
                        uuid: "4943490f-7e60-4b63-a6cf-af5d60c22080",
                        question: "Your email address",
                        description: null,
                        type: "EMAIL_ADDRESS",
                        is_required: true,
                        fields: [],
                        __typename: "Question",
                    },
                ],
                setting: {
                    uuid: "8cd9f371-c978-4f03-b003-64780d9be67c",
                    end_date: null,
                    allow_multiple_responses: true,
                    response_limit: 1000000,
                    submission_text: "",
                    notification_email: "",
                    __typename: "FormSetting",
                },
                __typename: "Form",
            },
            text: {
                main: "Elegante",
                body: "Subscribe to our newsletter and receive updates on latest items",
            },
            footerLinks: [
                {
                    name: "Categories",
                    links: [
                        {
                            text: "Starters",
                            url: "#",
                        },
                        {
                            text: "Mains",
                            url: "#",
                        },
                        {
                            text: "Desserts",
                            url: "#",
                        },
                        {
                            text: "Drinks",
                            url: "#",
                        },
                        {
                            text: "Dinner",
                            url: "#",
                        },
                        {
                            text: "Soups",
                            url: "#",
                        },
                    ],
                },
                {
                    name: "Company",
                    links: [
                        {
                            text: "Shop",
                            url: "#",
                        },
                        {
                            text: "Blog",
                            url: "#",
                        },
                        {
                            text: "Contact",
                            url: "#",
                        },
                        {
                            text: "About",
                            url: "#",
                        },
                        {
                            text: "Terms of Use",
                            url: "#",
                        },
                        {
                            text: "Privacy Policy",
                            url: "#",
                        },
                    ],
                },
                {
                    name: "Contact",
                    links: [
                        {
                            text: "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051",
                            url: "#",
                            name: "address",
                            not_url: true,
                        },
                        {
                            text: "(+44) 263-2665",
                            url: "#",
                            name: "phone",
                        },
                        {
                            name: "socialMedia",
                            links: [
                                { icon: "facebook", url: "#" },
                                { icon: "instagram", url: "#" },
                                { icon: "youtube", url: "#" },
                            ],
                        },
                    ],
                },
            ],
            icons: [
                {
                    type: "FACEBOOK",
                    url: "https://facebook.com",
                },
                {
                    type: "INSTAGRAM",
                    url: "https://instagram.com",
                },
                {
                    type: "TWITTER",
                    url: "https://twitter.com",
                },
            ],
        },
    },
    precedence: 4,
    pages: ["*"],
};
