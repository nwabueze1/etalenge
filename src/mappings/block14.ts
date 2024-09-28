export default {
  uuid: "5187c2bf-dbb2-4e97-8b5f-67f49f8a2659",
  component: "EleganteBlock14",
  config: {
    content: {
      text: {
        heading: "Send us a message",
        subheading: "Our dedicated team are eager to hear from you and are always willing to cater for your queries.",
      },
      image: {
        src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/forms.webp",
      },
      form_uuid: null,
      form: {
        uuid: "2c149824-4595-49b4-b44c-277b568f52a6",
        site_uuid: "b7a6df60-3fd5-4666-b481-5055608228ad",
        title: "Contact us form",
        author: "createaccount@mail.com",
        status: "1",
        questions: [
          {
            uuid: "31618ad1-0957-453c-9f75-570c540191eb",
            question: "First name",
            description: null,
            type: "SHORT_TEXT",
            is_required: true,
            fields: {
              character_limit: null,
            },
            __typename: "Question",
          },
          {
            uuid: "31618ad1-0957-453c-9f75-570c540191eb",
            question: "Last name",
            description: null,
            type: "SHORT_TEXT",
            is_required: true,
            fields: {
              character_limit: null,
            },
            __typename: "Question",
          },
          {
            uuid: "17664899-0dc6-47e2-9ac4-829370b8f7e3",
            question: "Your phone number",
            description: null,
            type: "PHONE_NUMBER",
            is_required: true,
            fields: {
              default_country_code: "US",
            },
            __typename: "Question",
          },
          {
            uuid: "a46bbda2-8c12-4a50-b097-79c236566b4a",
            question: "Your Email",
            description: null,
            type: "EMAIL_ADDRESS",
            is_required: true,
            fields: [],
            __typename: "Question",
          },
          {
            uuid: "41a2d1a8-8910-428c-81d3-66fdd66a3662",
            question: "Send us a message",
            description: null,
            type: "MULTILINE",
            is_required: true,
            fields: {
              character_limit: "",
            },
            __typename: "Question",
          },
        ],
        setting: {
          uuid: "e8f4edf0-99f8-42f9-b5a2-d4675e8cf31b",
          end_date: null,
          allow_multiple_responses: true,
          response_limit: 1000000,
          submission_text: "",
          notification_email: "",
          __typename: "FormSetting",
        },
        __typename: "Form",
      },
    },
    configuration: {
      fonts: {
        heading: "fonts.heading",
        body: "fonts.body",
      },
      colors: {
        main: {
          100: "neutral.500",
          200: "primary.main",
          300: "primary.200",
          400: "neutral.500",
          500: "alert.error",
          600: "neutral.200",
          700: "neutral.100",
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
    ssr_network_operation: "GET_FORM",
    ssr_content_fields: ["form"],
    imageCropper: {
      desktop: {
        defaultSize: 1440,
        height: 400,
        width: 418,
      },
      tablet: {
        defaultSize: 600,
        height: 373.5,
        width: 385,
      },
      mobile: {
        defaultSize: 400,
        width: 199,
        height: 373.5,
      },
    },
  },
  pages: ["contact"],
  precedence: 2,
};
