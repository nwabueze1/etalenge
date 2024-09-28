import { TBlockConfig } from "../../type";

export const block4Configuration: TBlockConfig = {
  configuration: {
    colors: {
      main: {
        100: "neutral.100",
        200: "neutral.500",
        300: "neutral.400",
        400: "primary.main",
        500: "neutral.200",
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
    fonts: {
      heading: "fonts.heading",
      body: "fonts.body",
    },
  },
  content: {
    text: {
      heading: "From our blog",
    },
    buttons: [{ text: "All articles", url: "/blog" }],
    post_uuids: null,
    posts: [
      {
        featured_image:
          '{"src":"https:\\/\\/sytbuildr.s3.eu-west-2.amazonaws.com\\/0406191c-f351-4a58-b164-b9521b3d78c5\\/ZQt1zujdiryMEQ9zuLXgJpuPGx8nU8MWFIdIO0Dv.jpg","alternative_text":"Serverless Architecture","coordinates":{"desktop":{"left":0.1,"top":0,"right":0.9,"bottom":0.67},"tablet":{"left":null,"top":null,"right":null,"bottom":null},"mobile":{"left":null,"top":null,"right":null,"bottom":null}},"width":1500,"height":1001}',
        slug: "/cloud-computing/what-is-serverless-architecture",
        title: "What is Serverless Architecture?",
        uuid: "5de140e6-89a5-4fb5-a00a-f801a35d072d",
        category_name: "Cloud Computing",
      },
      {
        featured_image:
          '{"src":"https:\\/\\/sytbuildr.s3.eu-west-2.amazonaws.com\\/0406191c-f351-4a58-b164-b9521b3d78c5\\/qeAa3PhClZhquKhJzm24tl8HPrkWavvLYexaQCzq.jpg","coordinates":{"desktop":{"left":0.18,"top":0,"right":0.82,"bottom":0.54},"tablet":{"left":null,"top":null,"right":null,"bottom":null},"mobile":{"left":null,"top":null,"right":null,"bottom":null}},"width":1024,"height":550}',
        slug: "/hrm-software/why-your-business-needs-an-hr-portal",
        title: "Why Your Business Needs an HR Portal",
        uuid: "796daa0c-9346-4dae-8a55-e78c9788182a",
        category_name: "HRM Software",
      },
      {
        featured_image:
          '{"src":"https:\\/\\/sytbuildr.s3.eu-west-2.amazonaws.com\\/0406191c-f351-4a58-b164-b9521b3d78c5\\/HPOdL19Js5y4tqnInsgcf6Q6qy8coi3JDSX5vcPg.jpg","coordinates":{"desktop":{"left":0.34,"top":0,"right":0.66,"bottom":0.26},"tablet":{"left":0,"top":0,"right":0,"bottom":0},"mobile":{"left":0,"top":0,"right":0,"bottom":0}},"width":824,"height":215,"name":"Serverless architecture providers","description":"Serverless architecture providers","alternative_text":"Serverless architecture providers","caption":"Serverless architecture providers"}',
        slug: "/cloud-computing/exploring-the-top-10-serverless-architecture-providers",
        title: "Top 8 Serverless Architecture Providers",
        uuid: "f398831c-4df8-49f3-ad6f-81ef6aa9316d",
        category_name: "Cloud Computing",
      },
      {
        featured_image:
          '{"src":"https:\\/\\/sytbuildr.s3.eu-west-2.amazonaws.com\\/0406191c-f351-4a58-b164-b9521b3d78c5\\/cpM2EY4wllShGnDCXbejGBIx91YMfIQhZEuhdsHd.jpg"}',
        slug: "/development/12-principles-of-web-design",
        title: "12 Principles of Web Design",
        uuid: "9a452652-55ae-4d5d-bec1-e85937b10833",
        category_name: "Development",
      },
    ],
  },
  mode: "view",
  ssr_network_operation: "GET_POSTS",
  ssr_content_fields: ["posts"],
};
