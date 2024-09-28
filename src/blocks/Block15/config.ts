import { TBlockConfig } from "../../type";

export const block15Configuration: TBlockConfig = {
  content: {
    text: {
      heading: "Our story",
      subheading:
        "Elegante is the ultimate grocery destination for your convenience. We offer a wide selection of grocery items, including fresh produce, everyday essentials, and more. Our knowledgeable team is always available to answer any questions you may have.",
    },
    image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/our-story.webp" },
    cards: [
      {
        title: "28+",
        subtitle: "Exotic meals",
      },
      {
        title: "56+",
        subtitle: "Certified chefs",
      },
      {
        title: "800+",
        subtitle: "Happy customers",
      },
      {
        title: "1000+",
        subtitle: "Confirmed deliveries",
      },
    ],
    buttons: [
      {
        text: "View menu",
        url: "#",
        variant: "contained",
      },
      {
        text: "Contact us",
        url: "#",
        variant: "outlined"
      },
    ],
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
        400: "neutral.500",
        500: "neutral.200",
      },
      background: {
        100: "neutral.100",
      },
    },
  },
};
