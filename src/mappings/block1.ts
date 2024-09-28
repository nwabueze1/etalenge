export default {
  uuid: "271884dc-a83c-488e-b58a-23182579f769",
  component: "EleganteBlock1",
  config: {
    configuration: {
      fonts: {
        heading: "fonts.heading",
        body: "fonts.body",
      },
      colors: {
        main: {
          100: "neutral.100",
          200: "primary.main",
        },
      },
    },
    content: {
      text: {
        main: "Elegante",
      },
      links: [
        {
          text: "Menu",
          url: "/menu",
        },
        {
          text: "Blog",
          url: "/blog",
        },
        {
          text: "Contact",
          url: "/contact",
        },
        {
          text: "About",
          url: "/about",
        },
      ],
    },
    precedence: 0,
    pages: ["*"],
  },
};
