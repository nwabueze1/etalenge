export var block9Configuration = {
    content: {
        text: {
            title: "All products",
            overline: "Menu",
        },
        menu_uuid: null,
        menu: {
            uuid: "413f6732-3231-45f8-bd68-a499c20f53da",
            name: "KIamoni menu categories",
            options_config: [
                {
                    name: "types",
                    uuid: "2ac97362-f70d-4489-a52c-ab6a9f4694cb",
                    type: "selection",
                    options: {
                        selection: [
                            {
                                amount: 50,
                                name: "grilled",
                            },
                            {
                                amount: 150,
                                name: "roasted",
                            },
                            {
                                amount: 200,
                                name: "coconut",
                            },
                            {
                                amount: 50,
                                name: "onions",
                            },
                        ],
                        extras: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                        deselection: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                    },
                },
                {
                    name: "types",
                    uuid: "53fac0ba-adfa-4162-a749-763cd7a32328",
                    type: "selection",
                    options: {
                        selection: [
                            {
                                amount: 50,
                                name: "onions",
                            },
                        ],
                        extras: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                        deselection: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                    },
                },
                {
                    name: "Size",
                    uuid: "5691be53-efca-4647-ad39-5a27cadfd8ec",
                    type: "selection",
                    options: {
                        selection: [
                            {
                                amount: 0,
                                name: "1kg",
                            },
                            {
                                amount: 70,
                                name: "2kg",
                            },
                            {
                                amount: 100,
                                name: "3kg",
                            },
                            {
                                amount: 150,
                                name: "5kg",
                            },
                        ],
                        extras: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                        deselection: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                    },
                },
                {
                    name: "Customize",
                    uuid: "b340d3f2-823a-415c-94c5-f8efa8424518",
                    type: "selection",
                    options: {
                        selection: [
                            {
                                amount: 50,
                                name: "Salad",
                            },
                            {
                                amount: 100,
                                name: "Chicken",
                            },
                            {
                                amount: 70,
                                name: "Hotdog",
                            },
                            {
                                amount: 120,
                                name: "Bogu Crust",
                            },
                        ],
                        extras: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                        deselection: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                    },
                },
                {
                    name: "Extras",
                    uuid: "3ef9cd27-25f7-4ca4-a3ff-938881f345ac",
                    type: "extras",
                    options: {
                        selection: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                        extras: [
                            {
                                amount: 50,
                                name: "Mayonnaise",
                            },
                            {
                                amount: 120,
                                name: "Coca-Cola",
                            },
                            {
                                amount: 70,
                                name: "Veggies",
                            },
                            {
                                amount: 120,
                                name: "Monster Energy Drink",
                            },
                            {
                                amount: 50,
                                name: "Chili Sauce",
                            },
                            {
                                amount: 70,
                                name: "Cheese",
                            },
                        ],
                        deselection: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                    },
                },
                {
                    name: "Customize",
                    uuid: "ead04813-d089-467d-948e-cfa1252b0e60",
                    type: "deselection",
                    options: {
                        selection: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                        extras: [
                            {
                                amount: 0,
                                name: "",
                            },
                        ],
                        deselection: [
                            {
                                amount: 50,
                                name: "Salad",
                            },
                            {
                                amount: 70,
                                name: "Chicken",
                            },
                            {
                                amount: 50,
                                name: "Bogu Crust",
                            },
                            {
                                amount: 30,
                                name: "Hotdog",
                            },
                        ],
                    },
                },
            ],
            restaurant: {
                __typename: "Restaurant",
                uuid: "eb17f44b-c920-4e3f-8a8a-2039cbbbd23f",
                site: {
                    __typename: "Site",
                    uuid: "e816b705-7bff-4500-9ad4-6049acbd3487",
                },
                bank_info: {
                    __typename: "BankInfo",
                    currency: "NGN",
                    delivery_fee: 400,
                },
            },
            menuCategories: [
                {
                    __typename: "MenuCategory",
                    uuid: "6657e898-46a8-4bba-8375-e5354e2594ed",
                    id: "48",
                    title: "Appetizers",
                    description: "Get your meal started off right with one of our delicious appetizers. From classic favorites like wings and nachos to more unique options like our roasted",
                },
                {
                    __typename: "MenuCategory",
                    uuid: "d01e9d57-913c-4254-a903-a738323a5628",
                    id: "49",
                    title: "Entrees",
                    description: "Our entrees are made with the freshest ingredients and a whole lot of love. From our juicy burgers to our hand-rolled pasta dishes, there's something for every taste bud on our menu.",
                },
                {
                    __typename: "MenuCategory",
                    uuid: "6f27c88e-b383-465a-9a0f-a6724e7bc054",
                    id: "50",
                    title: "Sides",
                    description: "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
                },
                {
                    __typename: "MenuCategory",
                    uuid: "910be2e3-719e-484e-8e4a-5918c304cf7a",
                    id: "51",
                    title: "Desserts",
                    description: "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
                },
                {
                    __typename: "MenuCategory",
                    uuid: "53634bad-e0c6-4e63-902b-4b95184ebb4b",
                    id: "52",
                    title: "Breakfast",
                    description: "Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone.",
                },
                {
                    __typename: "MenuCategory",
                    uuid: "863aff64-c5fd-4f15-962a-3b0197ef3f43",
                    id: "53",
                    title: "Beverages",
                    description: "From craft cocktails to local beers, we have a beverage to pair perfectly with your meal.",
                },
            ],
            menuItems: [
                {
                    uuid: "50d9910d-385d-47f3-9979-7de2a4884d4b",
                    name: "stew and dish",
                    slug: "/stew/stew-and-dish",
                    description: "some sweet stew and good dish",
                    image: "{\"src\":\"https://images.unsplash.com/photo-1714136121104-35935be726ec\",\"name\":\"sauce\",\"width\":0,\"height\":0,\"coordinates\":{\"mobile\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null},\"tablet\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null},\"desktop\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null}},\"description\":\"Food sweet\"}",
                    price: 30,
                    options: ["971a49b2-be58-4617-aead-073850d450eb"],
                    calories: "27",
                    menu: {
                        uuid: "413f6732-3231-45f8-bd68-a499c20f53da",
                        name: "Sweet Food",
                        is_active: true,
                        menuCategories: [
                            {
                                title: "Stew",
                                uuid: "f95b12b3-3b89-45ed-ba63-b69e3a85f369",
                                status: true,
                                position: 0,
                                description: "Some stew",
                                created_at: "2023-12-10 18:38:45",
                            },
                        ],
                        options_config: [
                            {
                                name: "Stew",
                                type: "extras",
                                options: {
                                    selection: [
                                        {
                                            name: "Big",
                                            amount: 20,
                                        },
                                        {
                                            name: "Small",
                                            amount: 50,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "Dis-content",
                                            amount: 2,
                                        },
                                        {
                                            name: "Dis-content",
                                            amount: 0,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "Choice-multiple",
                                            amount: 2,
                                        },
                                        {
                                            name: "Choice-news",
                                            amount: 2,
                                        },
                                        {
                                            name: "Choice-thrilled",
                                            amount: 2,
                                        },
                                    ],
                                },
                                uuid: "971a49b2-be58-4617-aead-073850d450eb",
                            },
                            {
                                name: "diet coke",
                                type: "extras",
                                options: {
                                    selection: [
                                        {
                                            name: "coke",
                                            amount: 20,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "potato chips",
                                            amount: 10,
                                        },
                                        {
                                            name: "plantain chips",
                                            amount: 5,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "menu extract",
                                            amount: 5,
                                        },
                                        {
                                            name: "item extract",
                                            amount: 10,
                                        },
                                    ],
                                },
                                uuid: "a7dca27c-b40f-43d5-b99c-b00ebed1acca",
                            },
                            {
                                name: "paliative",
                                type: "selection",
                                options: {
                                    selection: [
                                        {
                                            name: "fanta",
                                            amount: 10,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "coke",
                                            amount: 200,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "rice",
                                            amount: 200,
                                        },
                                        {
                                            name: "Beans",
                                            amount: 150,
                                        },
                                        {
                                            name: "chips",
                                            amount: 10,
                                        },
                                    ],
                                },
                                uuid: "e97ff2cd-eaa1-48e2-8754-040fc5ee860a",
                            },
                        ],
                        restaurant: {
                            uuid: "36c7ac54-0ad1-4754-bd0a-c620a8441ad4",
                            name: "James Doe",
                            description: null,
                            email: null,
                            phone: null,
                            cover_image: null,
                            bank_info: {
                                currency: "NGN",
                                bank_name: null,
                                account_name: null,
                                account_number: null,
                                delivery_fee: null,
                            },
                            location: {
                                address1: "address is good",
                                address2: "",
                                country: "",
                                state: "",
                            },
                            deliveryInformation: null,
                        },
                    },
                },
                {
                    uuid: "efed07dc-4246-4bb5-983c-2c6cf35317ce",
                    name: "Egg sauce",
                    slug: "/stew/egg-sauce",
                    description: "some sweet egg sauce",
                    image: "{\"src\":\"https://img.wazobia.tech/https://images.unsplash.com/photo-1713715098941-48da2a137a25?tr=w-400,cr-0.0.400.600&tr=w-1100,cr-0.0.1100.1650\",\"name\":\"sauce\",\"width\":0,\"height\":0,\"coordinates\":{\"mobile\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null},\"tablet\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null},\"desktop\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null}},\"description\":\"Food sweet\"}",
                    price: 200,
                    options: ["971a49b2-be58-4617-aead-073850d450eb", "a7dca27c-b40f-43d5-b99c-b00ebed1acca"],
                    calories: null,
                    menu: {
                        uuid: "413f6732-3231-45f8-bd68-a499c20f53da",
                        name: "Sweet Food",
                        is_active: true,
                        menuCategories: [
                            {
                                title: "Stew",
                                uuid: "f95b12b3-3b89-45ed-ba63-b69e3a85f369",
                                status: true,
                                position: 0,
                                description: "Some stew",
                                created_at: "2023-12-10 18:38:45",
                            },
                        ],
                        options_config: [
                            {
                                name: "Stew",
                                type: "extras",
                                options: {
                                    selection: [
                                        {
                                            name: "Big",
                                            amount: 20,
                                        },
                                        {
                                            name: "Small",
                                            amount: 50,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "Dis-content",
                                            amount: 2,
                                        },
                                        {
                                            name: "Dis-content",
                                            amount: 0,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "Choice-multiple",
                                            amount: 2,
                                        },
                                        {
                                            name: "Choice-news",
                                            amount: 2,
                                        },
                                        {
                                            name: "Choice-thrilled",
                                            amount: 2,
                                        },
                                    ],
                                },
                                uuid: "971a49b2-be58-4617-aead-073850d450eb",
                            },
                            {
                                name: "diet coke",
                                type: "extras",
                                options: {
                                    selection: [
                                        {
                                            name: "coke",
                                            amount: 20,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "potato chips",
                                            amount: 10,
                                        },
                                        {
                                            name: "plantain chips",
                                            amount: 5,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "menu extract",
                                            amount: 5,
                                        },
                                        {
                                            name: "item extract",
                                            amount: 10,
                                        },
                                    ],
                                },
                                uuid: "a7dca27c-b40f-43d5-b99c-b00ebed1acca",
                            },
                            {
                                name: "paliative",
                                type: "selection",
                                options: {
                                    selection: [
                                        {
                                            name: "fanta",
                                            amount: 10,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "coke",
                                            amount: 200,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "rice",
                                            amount: 200,
                                        },
                                        {
                                            name: "Beans",
                                            amount: 150,
                                        },
                                        {
                                            name: "chips",
                                            amount: 10,
                                        },
                                    ],
                                },
                                uuid: "e97ff2cd-eaa1-48e2-8754-040fc5ee860a",
                            },
                        ],
                        restaurant: {
                            uuid: "36c7ac54-0ad1-4754-bd0a-c620a8441ad4",
                            name: "James Doe",
                            description: null,
                            email: null,
                            phone: null,
                            cover_image: null,
                            bank_info: {
                                currency: "NGN",
                                bank_name: null,
                                account_name: null,
                                account_number: null,
                                delivery_fee: null,
                            },
                            location: {
                                address1: "address is good",
                                address2: "",
                                country: "",
                                state: "",
                            },
                            deliveryInformation: null,
                        },
                    },
                },
                {
                    uuid: "7562c468-8cd0-4ff9-9f1e-8741ad8937b3",
                    name: "pepper soup",
                    slug: "/stew/pepper-soup",
                    description: "sweet pepper soup filled with asorted eat",
                    image: "{\"src\":\"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf\",\"name\":\"sauce\",\"width\":0,\"height\":0,\"coordinates\":{\"mobile\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null},\"tablet\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null},\"desktop\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null}},\"description\":\"Food sweet\"}",
                    price: 120,
                    options: ["a7dca27c-b40f-43d5-b99c-b00ebed1acca", "e97ff2cd-eaa1-48e2-8754-040fc5ee860a"],
                    calories: null,
                    menu: {
                        uuid: "413f6732-3231-45f8-bd68-a499c20f53da",
                        name: "Sweet Food",
                        is_active: true,
                        menuCategories: [
                            {
                                title: "Stew",
                                uuid: "f95b12b3-3b89-45ed-ba63-b69e3a85f369",
                                status: true,
                                position: 0,
                                description: "Some stew",
                                created_at: "2023-12-10 18:38:45",
                            },
                        ],
                        options_config: [
                            {
                                name: "Stew",
                                type: "extras",
                                options: {
                                    selection: [
                                        {
                                            name: "Big",
                                            amount: 20,
                                        },
                                        {
                                            name: "Small",
                                            amount: 50,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "Dis-content",
                                            amount: 2,
                                        },
                                        {
                                            name: "Dis-content",
                                            amount: 0,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "Choice-multiple",
                                            amount: 2,
                                        },
                                        {
                                            name: "Choice-news",
                                            amount: 2,
                                        },
                                        {
                                            name: "Choice-thrilled",
                                            amount: 2,
                                        },
                                    ],
                                },
                                uuid: "971a49b2-be58-4617-aead-073850d450eb",
                            },
                            {
                                name: "diet coke",
                                type: "extras",
                                options: {
                                    selection: [
                                        {
                                            name: "coke",
                                            amount: 20,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "potato chips",
                                            amount: 10,
                                        },
                                        {
                                            name: "plantain chips",
                                            amount: 5,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "menu extract",
                                            amount: 5,
                                        },
                                        {
                                            name: "item extract",
                                            amount: 10,
                                        },
                                    ],
                                },
                                uuid: "a7dca27c-b40f-43d5-b99c-b00ebed1acca",
                            },
                            {
                                name: "paliative",
                                type: "selection",
                                options: {
                                    selection: [
                                        {
                                            name: "fanta",
                                            amount: 10,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "coke",
                                            amount: 200,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "rice",
                                            amount: 200,
                                        },
                                        {
                                            name: "Beans",
                                            amount: 150,
                                        },
                                        {
                                            name: "chips",
                                            amount: 10,
                                        },
                                    ],
                                },
                                uuid: "e97ff2cd-eaa1-48e2-8754-040fc5ee860a",
                            },
                        ],
                        restaurant: {
                            uuid: "36c7ac54-0ad1-4754-bd0a-c620a8441ad4",
                            name: "James Doe",
                            description: null,
                            email: null,
                            phone: null,
                            cover_image: null,
                            bank_info: {
                                currency: "NGN",
                                bank_name: null,
                                account_name: null,
                                account_number: null,
                                delivery_fee: null,
                            },
                            location: {
                                address1: "address is good",
                                address2: "",
                                country: "",
                                state: "",
                            },
                            deliveryInformation: null,
                        },
                    },
                },
                {
                    uuid: "7562c468-8cd0-4ff9-9f1e-8741ad8937b3",
                    name: "pepper soup",
                    slug: "/stew/pepper-soup",
                    description: "sweet pepper soup filled with asorted eat",
                    image: "{\"src\":\"https://sytbuildr.s3.eu-west-2.amazonaws.com/05d4dc52-15a4-4692-b2fa-4a2581f0117a/8PMj9DdihNnacB5Ds0lf336aUyHO7ulB3VsOETlq.jpg\",\"name\":\"sauce\",\"width\":0,\"height\":0,\"coordinates\":{\"mobile\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null},\"tablet\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null},\"desktop\":{\"top\":null,\"left\":null,\"right\":null,\"bottom\":null}},\"description\":\"Food sweet\"}",
                    price: 120,
                    options: ["a7dca27c-b40f-43d5-b99c-b00ebed1acca", "e97ff2cd-eaa1-48e2-8754-040fc5ee860a"],
                    calories: null,
                    menu: {
                        uuid: "413f6732-3231-45f8-bd68-a499c20f53da",
                        name: "Sweet Food",
                        is_active: true,
                        menuCategories: [
                            {
                                title: "Stew",
                                uuid: "f95b12b3-3b89-45ed-ba63-b69e3a85f369",
                                status: true,
                                position: 0,
                                description: "Some stew",
                                created_at: "2023-12-10 18:38:45",
                            },
                        ],
                        options_config: [
                            {
                                name: "Stew",
                                type: "extras",
                                options: {
                                    selection: [
                                        {
                                            name: "Big",
                                            amount: 20,
                                        },
                                        {
                                            name: "Small",
                                            amount: 50,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "Dis-content",
                                            amount: 2,
                                        },
                                        {
                                            name: "Dis-content",
                                            amount: 0,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "Choice-multiple",
                                            amount: 2,
                                        },
                                        {
                                            name: "Choice-news",
                                            amount: 2,
                                        },
                                        {
                                            name: "Choice-thrilled",
                                            amount: 2,
                                        },
                                    ],
                                },
                                uuid: "971a49b2-be58-4617-aead-073850d450eb",
                            },
                            {
                                name: "diet coke",
                                type: "extras",
                                options: {
                                    selection: [
                                        {
                                            name: "coke",
                                            amount: 20,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "potato chips",
                                            amount: 10,
                                        },
                                        {
                                            name: "plantain chips",
                                            amount: 5,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "menu extract",
                                            amount: 5,
                                        },
                                        {
                                            name: "item extract",
                                            amount: 10,
                                        },
                                    ],
                                },
                                uuid: "a7dca27c-b40f-43d5-b99c-b00ebed1acca",
                            },
                            {
                                name: "paliative",
                                type: "selection",
                                options: {
                                    selection: [
                                        {
                                            name: "fanta",
                                            amount: 10,
                                        },
                                    ],
                                    deselection: [
                                        {
                                            name: "coke",
                                            amount: 200,
                                        },
                                    ],
                                    extras: [
                                        {
                                            name: "rice",
                                            amount: 200,
                                        },
                                        {
                                            name: "Beans",
                                            amount: 150,
                                        },
                                        {
                                            name: "chips",
                                            amount: 10,
                                        },
                                    ],
                                },
                                uuid: "e97ff2cd-eaa1-48e2-8754-040fc5ee860a",
                            },
                        ],
                        restaurant: {
                            uuid: "36c7ac54-0ad1-4754-bd0a-c620a8441ad4",
                            name: "James Doe",
                            description: null,
                            email: null,
                            phone: null,
                            cover_image: null,
                            bank_info: {
                                currency: "NGN",
                                bank_name: null,
                                account_name: null,
                                account_number: null,
                                delivery_fee: null,
                            },
                            location: {
                                address1: "address is good",
                                address2: "",
                                country: "",
                                state: "",
                            },
                            deliveryInformation: null,
                        },
                    },
                },
            ],
        },
    },
    configuration: {
        fonts: {
            heading: "fonts.heading",
            body: "fonts.body",
        },
        colors: {
            main: {
                100: "primary.main",
                200: "neutral.400",
                300: "neutral.500",
                400: "primary.400",
                500: "neutral.100",
                600: "neutral.200",
                700: "primary.300",
                800: "neutral.400",
                900: "primary.200",
            },
            button: {
                100: "primary.main",
                200: "neutral.100",
                300: "neutral.700",
            },
            background: {
                100: "neutral.100",
            },
        },
    },
    ssr_network_operation: "GET_MENU",
    ssr_content_fields: ["menu_uuid"],
};
