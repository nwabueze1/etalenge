export default {
  uuid: "a6422257-4ba5-455f-a12d-29578464ece4",
  component: "EleganteBlock11",
  config: {
    content: {
      site_uuid: null,
    },
    configuration: {
      fonts: {
        heading: "fonts.heading",
        body: "fonts.body",
      },
      colors: {
        main: {
          100: "primary.400",
          200: "primary.main",
          300: "neutral.400",
          400: "neutral.500",
          500: "primary.100",
          600: "neutral.200",
          700: "alert.error",
        },
        button: {
          100: "primary.main",
          200: "neutral.100",
          300: "primary.200",
          400: "neutral.200",
          500: "neutral.400",
          600: "neutral.700",
          700: "alert.error",
        },
        background: {
          100: "neutral.100",
        },
      },
    },
    ssr_network_operation: "GET_CART",
    ssr_content_fields: ["site_uuid"],
  },
  pages: ["cart"],
  precedence: 1,
};
