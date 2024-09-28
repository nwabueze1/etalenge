import { TBlockConfig } from "../../type";

export const block1Configuration: TBlockConfig = {
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
  mode: "view",
};
