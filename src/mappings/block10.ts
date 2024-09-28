export default {
  uuid: "af3ff699-f20c-40a1-9148-e994df0d5176",
  component: "EleganteBlock10",
  config: {
    content: {
      menu_item_uuid: null,
      menu_item: {
        calories: null,
        created_at: "2023-12-11 05:50:20",
        description: "some sweet egg sauce",
        image:
          '{"src":"https:\\/\\/sytbuildr.s3.eu-west-2.amazonaws.com\\/05d4dc52-15a4-4692-b2fa-4a2581f0117a\\/8PMj9DdihNnacB5Ds0lf336aUyHO7ulB3VsOETlq.jpg","name":"sweet stew","width":1500,"height":1125,"coordinates":{"mobile":{"top":null,"left":null,"right":null,"bottom":null},"tablet":{"top":null,"left":null,"right":null,"bottom":null},"desktop":{"top":0,"left":0.05,"right":0.95,"bottom":0.75}}}',
        name: "Egg sauce",
        options: ["971a49b2-be58-4617-aead-073850d450eb", "a7dca27c-b40f-43d5-b99c-b00ebed1acca"],
        price: 200,
        slug: "/stew/egg-sauce",
        status: 1,
        menu: {
          restaurant: {
            bank_info: {
              currency: "NGN",
            },
          },
          options_config: [
            {
              name: "Stew",
              type: "extras",
              uuid: "971a49b2-be58-4617-aead-073850d450eb",
              options: {
                deselection: [
                  {
                    amount: 2,
                    name: "Dis-content",
                  },
                  {
                    amount: 0,
                    name: "Dis-content",
                  },
                ],
                extras: [
                  {
                    amount: 2,
                    name: "Choice-multiple",
                  },
                  {
                    amount: 2,
                    name: "Choice-news",
                  },
                  {
                    amount: 2,
                    name: "Choice-thrilled",
                  },
                ],
                selection: [
                  {
                    amount: 20,
                    name: "Big",
                  },
                  {
                    amount: 50,
                    name: "Small",
                  },
                ],
              },
            },
            {
              name: "diet coke",
              type: "extras",
              uuid: "a7dca27c-b40f-43d5-b99c-b00ebed1acca",
              options: {
                deselection: [
                  {
                    amount: 10,
                    name: "potato chips",
                  },
                  {
                    amount: 5,
                    name: "plantain chips",
                  },
                ],
                extras: [
                  {
                    amount: 5,
                    name: "menuItem extract",
                  },
                  {
                    amount: 10,
                    name: "item extract",
                  },
                ],
                selection: [
                  {
                    amount: 20,
                    name: "coke",
                  },
                ],
              },
            },
            {
              name: "paliative",
              type: "selection",
              uuid: "e97ff2cd-eaa1-48e2-8754-040fc5ee860a",
              options: {
                deselection: [
                  {
                    amount: 200,
                    name: "coke",
                  },
                ],
                extras: [
                  {
                    amount: 200,
                    name: "rice",
                  },
                  {
                    amount: 150,
                    name: "Beans",
                  },
                  {
                    amount: 10,
                    name: "chips",
                  },
                ],
                selection: [
                  {
                    amount: 10,
                    name: "fanta",
                  },
                ],
              },
            },
          ],
          uuid: "413f6732-3231-45f8-bd68-a499c20f53da",
          name: "Sweet Food",
          is_active: true,
        },
        related_menu_items: [
          {
            description: "some sweet egg sauce",
            created_at: "2023-12-11 05:50:20",
            calories: null,
            image:
              '{"src":"https:\\/\\/sytbuildr.s3.eu-west-2.amazonaws.com\\/05d4dc52-15a4-4692-b2fa-4a2581f0117a\\/8PMj9DdihNnacB5Ds0lf336aUyHO7ulB3VsOETlq.jpg","name":"sweet egwusi","width":1500,"height":1125,"coordinates":{"mobile":{"top":null,"left":null,"right":null,"bottom":null},"tablet":{"top":null,"left":null,"right":null,"bottom":null},"desktop":{"top":0,"left":0.05,"right":0.95,"bottom":0.75}}}',
            name: "Egg sauce",
            options: ["971a49b2-be58-4617-aead-073850d450eb", "a7dca27c-b40f-43d5-b99c-b00ebed1acca"],
            price: 200,
            slug: "/stew/egg-sauce",
            uuid: "efed07dc-4246-4bb5-983c-2c6cf35317ce",
          },
          {
            description: "sweet pepper soup filled with asorted eat",
            created_at: "2023-12-11 05:58:28",
            calories: null,
            image:
              '{"src":"https:\\/\\/sytbuildr.s3.eu-west-2.amazonaws.com\\/05d4dc52-15a4-4692-b2fa-4a2581f0117a\\/8PMj9DdihNnacB5Ds0lf336aUyHO7ulB3VsOETlq.jpg","name":"sweet stew","width":1500,"height":1125,"coordinates":{"mobile":{"top":null,"left":null,"right":null,"bottom":null},"tablet":{"top":null,"left":null,"right":null,"bottom":null},"desktop":{"top":0,"left":0.05,"right":0.95,"bottom":0.75}}}',
            name: "pepper soup",
            options: ["a7dca27c-b40f-43d5-b99c-b00ebed1acca", "e97ff2cd-eaa1-48e2-8754-040fc5ee860a"],
            price: 120,
            slug: "/stew/pepper-soup",
            uuid: "7562c468-8cd0-4ff9-9f1e-8741ad8937b3",
          },
        ],
      },
    },
    isSsr: true,
    ssr_network_operation: "GET_MENU_ITEM",
    ssr_content_fields: ["menu_item"],
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
        },
        button: {
          100: "primary.main",
          200: "neutral.100",
          300: "neutral.700",
        },
        modal: {
          100: "neutral.100",
          200: "primary.main",
          300: "neutral.200",
          400: "primary.400",
        },
        background: {
          100: "neutral.100",
        },
      },
    },
  },
  pages: ["menu-item"],
  precedence: 1,
};
