export default {
  uuid: "b3858c55-03e3-4895-bed0-5c421cdc8ec7",
  component: "EleganteBlock6",
  config: {
    configuration: {
      fonts: {
        heading: "fonts.heading",
        body: "fonts.body",
      },
      colors: {
        main: {
          100: "primary.400",
          200: "neutral.100",
        },
        button: {
          100: "primary.main",
          200: "neutral.100",
        },
        background: {
          100: "neutral.100",
        },
      },
    },
    content: {
      text: {
        heading: "From our instagram (follow us @eleganté)",
      },
      site_uuid: null,
      images: [
        { image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-1.webp" } },
        { image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-2.webp" } },
        { image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-3.webp" } },
        { image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-4.webp" } },
        { image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-5.webp" } },
        { image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-6.webp" } },
        { image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-8.webp" } },
        { image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-9.webp" } },
      ],
      ssr_network_operation: "GET_INSTAGRAM_IMAGES",
    },
    imageCropper: {
      desktop: {
        defaultSize: 1440,
        height: 500,
        width: 800,
      },
      tablet: {
        defaultSize: 600,
        height: 300,
        width: 387,
      },
      mobile: {
        defaultSize: 400,
        height: 115,
        width: 200,
      },
    },
  },
  pages: ["home", "about"],
  precedence: [3, 3],
};
