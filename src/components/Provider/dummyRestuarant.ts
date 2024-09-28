export const dummyRestuarant = {
  name: "James Doe",
  uuid: "36c7ac54-0ad1-4754-bd0a-c620a8441ad4",
  description: null,
  email: null,
  phone: null,
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
  menu: {
    uuid: "413f6732-3231-45f8-bd68-a499c20f53da",
    name: "Sweet Food",
    is_active: true,
    menuItems: [
      {
        uuid: "50d9910d-385d-47f3-9979-7de2a4884d4b",
        name: "stew and dish",
        slug: "/stew/stew-and-dish",
        description: "some sweet stew and good dish",
        image:
          '{"src":"https:\\/\\/images.unsplash.com\\/photo-1596797038530-2c107229654b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxfHxzdGV3fGVufDB8fHx8MTcwMjIzMzU0OHww&ixlib=rb-4.0.3&q=80&w=400","name":"stew","width":400,"height":533,"coordinates":{"mobile":{"top":null,"left":null,"right":null,"bottom":null},"tablet":{"top":null,"left":null,"right":null,"bottom":null},"desktop":{"top":0.25,"left":0,"right":1,"bottom":1.08}},"description":"stew"}',
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
            site: {
              uuid: "0110afc5-6f16-477d-a90e-5a1f6d06520d",
              name: "hgnamesuyet653",
              industry: null,
              default_currency: "GBP",
            },
          },
        },
      },
      {
        uuid: "efed07dc-4246-4bb5-983c-2c6cf35317ce",
        name: "Egg sauce",
        slug: "/stew/egg-sauce",
        description: "some sweet egg sauce",
        image:
          '{"src":"https:\\/\\/images.unsplash.com\\/photo-1499126167718-c87f5c1387e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw2fHxzYXVjZXxlbnwwfHx8fDE3MDIyNzM2MjN8MA&ixlib=rb-4.0.3&q=80&w=400","name":"sauce","width":0,"height":0,"coordinates":{"mobile":{"top":null,"left":null,"right":null,"bottom":null},"tablet":{"top":null,"left":null,"right":null,"bottom":null},"desktop":{"top":null,"left":null,"right":null,"bottom":null}},"description":"Food sweet"}',
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
            site: {
              uuid: "05d4dc52-15a4-4692-b2fa-4a2581f0117a",
              name: "hgnamesuyet653",
              industry: null,
              default_currency: "GBP",
            },
          },
        },
      },
      {
        uuid: "7562c468-8cd0-4ff9-9f1e-8741ad8937b3",
        name: "pepper soup",
        slug: "/stew/pepper-soup",
        description: "sweet pepper soup filled with asorted eat",
        image:
          '{"src":"https:\\/\\/images.unsplash.com\\/photo-1608500218882-986df81d55fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwyfHxzdGV3fGVufDB8fHx8MTcwMjI3Mzg0N3ww&ixlib=rb-4.0.3&q=80&w=400","name":"Hot pepper soup","width":400,"height":600,"coordinates":{"mobile":{"top":null,"left":null,"right":null,"bottom":null},"tablet":{"top":null,"left":null,"right":null,"bottom":null},"desktop":{"top":0.34,"left":0,"right":1,"bottom":1.16}},"description":"Sweet hot pepper soup ready with good meat"}',
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
            site: {
              uuid: "05d4dc52-15a4-4692-b2fa-4a2581f0117a",
              name: "hgnamesuyet653",
              industry: null,
              default_currency: "GBP",
            },
          },
        },
      },
    ],
    menuCategories: [
      {
        uuid: "f95b12b3-3b89-45ed-ba63-b69e3a85f369",
        title: "Stew",
        status: true,
        position: 0,
        description: "Some stew",
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
      site: {
        uuid: "0110afc5-6f16-477d-a90e-5a1f6d06520d",
        name: "hgnamesuyet653",
        industry: null,
        country: "United Kingdom",
        default_currency: "GBP",
        metadata: null,
        display_name: "hgnamesuyet653",
      },
    },
  },
  openingTimes: null,
};
