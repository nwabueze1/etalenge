const colors = {
  primary: {
    main: "#000000",
    100: "#616161",
    200: "#3A3A3A",
    300: "#292929",
    400: "#202020",
  },
  neutral: {
    main: "#272727",
    100: "#FFFFFF",
    200: "#FAFAFA",
    300: "#F2F2F2",
    400: "#C0C2CC",
    500: "#909199",
    600: "#5C5D66",
    700: "#2B2C33",
  },
  secondary: {
    main: "#BFBFBF",
    100: "#FFFFFF",
    200: "#F7F7F7",
    300: "#F0F0F0",
    400: "#E3E3E3",
  },
  alert: {
    positive: "#1E8A0E",
    general: "#0076E5",
    error: "#E50E00",
  },
};

const fonts = {
  heading: {
    options: ["'Inter', sans-serif", "Losta Masta", "Montserrat", "Open Sans"],
    selected: "'Inter', sans-serif",
  },
  body: {
    options: ["'Inter', sans-serif", "Losta Masta", "Montserrat", "Open Sans"],
    selected: "'Inter', sans-serif",
  },
};

export type TTemplate = {
  name: string;
  label: string;
  uuid: string;
  image: string;
  blocks: string[];
  colors: { [key: string]: any };
  fonts: { [key: string]: any };
  hive_identifiers?: { block: string; field: string }[];
  type?: string;
  unique_identifier?: string;
};

export const templateConfig: TTemplate[] = [
  {
    uuid: "a19b5346-4f1f-4328-a9af-45096628e66f",
    name: "home",
    label: "Home Page",
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-Home.webp",
    blocks: [
      "2144705c-be39-4987-9fbc-c1d4eaa6a337",
      "5a8ec3d3-e6bf-4011-aa5a-a10d83eb8d28",
      "61aecd4a-4573-4e7d-9bbc-495a94b9fa60",
      "e58dfce2-7b67-48aa-b8a2-2cf2cb618581",
      "b3858c55-03e3-4895-bed0-5c421cdc8ec7",
    ],
    colors,
    fonts,
    hive_identifiers: [
      {
        block: "5a8ec3d3-e6bf-4011-aa5a-a10d83eb8d28",
        field: "menu_item_uuids",
      },
      {
        block: "61aecd4a-4573-4e7d-9bbc-495a94b9fa60",
        field: "post_uuids",
      },
    ],
  },
  {
    name: "menu",
    uuid: "e553e3d2-c465-4690-9062-c1fca85dfdd5",
    label: "Menu Page",
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-Menu.webp",
    blocks: ["28585561-f889-427e-af37-e8139f650bd9", "9cc62b6d-2a16-4f6c-8418-9cbc0f64cb87"],
    colors,
    fonts,
    hive_identifiers: [
      {
        block: "9cc62b6d-2a16-4f6c-8418-9cbc0f64cb87",
        field: "menu_uuid",
      },
    ],
  },
  {
    name: "contact us",
    uuid: "6eb6046e-2fca-4dbf-89d1-ac27de9a0c06",
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-Contact.webp",
    blocks: ["bf8a41b9-5df1-4075-97e7-463ef16c6546", "5187c2bf-dbb2-4e97-8b5f-67f49f8a2659"],
    colors,
    fonts,
    label: "Contact Us Page",
    hive_identifiers: [
      {
        block: "5187c2bf-dbb2-4e97-8b5f-67f49f8a2659",
        field: "form_uuid",
      },
    ],
  },
  {
    name: "about us",
    uuid: "3a050a05-bfb6-4ece-bcfc-b0ee03bcde46",
    label: "About Us Page",
    blocks: [
      "dd7581d3-57c0-4319-8e1a-7a4dbdf1a323",
      "1711d07c-6187-4872-8acb-a5ec908fc199",
      "e58dfce2-7b67-48aa-b8a2-2cf2cb618581",
      "b3858c55-03e3-4895-bed0-5c421cdc8ec7",
    ],
    fonts,
    colors,
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-About.webp",
  },
];

export const cartTemplate: TTemplate = {
  name: "cart",
  label: "Cart Page",
  uuid: "7f87b4b0-4857-4f64-bf3e-cf29b4dd1636",
  colors,
  fonts,
  blocks: ["a6422257-4ba5-455f-a12d-29578464ece4"],
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-Cart.webp",
};

export const blogTemplate: TTemplate = {
  name: "blog",
  label: "Blog Page",
  uuid: "cf9496c9-5fe0-4636-af04-4b9df7f98471",
  colors,
  fonts,
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-Blog.webp",
  blocks: ["6b7f9d44-3052-4ec5-891e-52c0f4e29b6e", "656abfc0-6307-48d3-939d-9ab690414b7a"],
};

export const menuItemTemplate: TTemplate = {
  name: "menu item",
  uuid: "98ffd2d1-f18a-44b8-baa5-8ab87dca3f57",
  label: "Menu Item Page",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-Product.webp",
  blocks: ["af3ff699-f20c-40a1-9148-e994df0d5176"],
  colors,
  fonts,
  hive_identifiers: [
    {
      block: "af3ff699-f20c-40a1-9148-e994df0d5176",
      field: "menu_item_uuid",
    },
  ],
  type: "restaurant.menu_item",
  unique_identifier: "blocks.eleganteblock10.content.menu_item_uuid",
};

export const blogPostTemplate: TTemplate = {
  name: "blog post",
  label: "Blog Post Page",
  uuid: "7f295aba-afd9-4438-978b-39528a7e6573",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-Post.webp",
  type: "blog.post",
  colors,
  fonts,
  blocks: ["e746df97-fa67-4781-aeb3-0d666ca18737"],
  unique_identifier: "blocks.eleganteblock12.content.post_uuid",
  hive_identifiers: [
    {
      block: "e746df97-fa67-4781-aeb3-0d666ca18737",
      field: "post_uuid",
    },
  ],
};

export const searchTemplate: TTemplate = {
  name: "search",
  label: "Search Page",
  uuid: "d0d5fe3a-453a-4c3d-8344-435d93ee3ad9",
  blocks: ["7f434d95-1287-4070-a158-861b658b2e6c"],
  fonts,
  colors,
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Elegante-Blog.webp",
};

export const errorTemplate = {
  name: "error",
  label: "Error Page",
  uuid: "c0e14680-00fc-40c2-a585-9777e19667ac",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/kiamoni/Screenshot+(171).png",
  blocks: ["5e2fded0-f4db-4ac8-b71c-4b553c8f4c0f"],
  colors,
  fonts,
};
