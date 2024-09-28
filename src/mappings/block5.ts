export default {
  uuid: "2144705c-be39-4987-9fbc-c1d4eaa6a337",
  component: "EleganteBlock5",
  config: {
    content: {
      blocks: [
        {
          title: "Exciting meals for everyone from all walks of life",
          image: {
            src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Hero-1.webp",
          },
          button: {
            text: "Read article",
            url: "#",
          },
        },
        {
          title: "Explore our main dishes to satisfy your appetite",
          image: {
            src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Hero-2.webp",
          },
          button: {
            text: "Read article",
            url: "#",
          },
        },
        {
          title: "Fill your belly with our exquisite desserts specially made for you",
          image: {
            src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Hero-3.webp",
          },
          button: {
            text: "Read article",
            url: "#",
          },
        },
        {
          title: "Eating fish: The secret to living a long and healthy body!!",
          image: {
            src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Hero-4.webp",
          },
          button: {
            text: "Read article",
            url: "#",
          },
        },
        {
          title: "Best vegetable combinations for your salad and general meals.",
          image: {
            src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Hero-5.webp",
          },
          button: {
            text: "Read article",
            url: "#",
          },
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
          100: "neutral.100",
          200: "primary.main",
          300: "neutral.700",
        },
        button: {
          100: "neutral.100",
          200: "primary.main",
          300: "neutral.500",
        },
        background: {
          100: "neutral.100",
        },
      },
    },
    imageCropper: {
      desktop: {
        defaultSize: 1440,
        height: 446.5,
        width: 720,
      },
      tablet: {
        defaultSize: 600,
        height: 194,
        width: 417,
      },
      mobile: {
        defaultSize: 400,
        height: 194,
        width: 215,
      },
    },
  },
  pages: ["home"],
  precedence: 1,
};