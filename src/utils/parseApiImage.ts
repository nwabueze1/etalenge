import { MediaValue } from "../helper";

export const parseApiImage = (image?: string | object): MediaValue => {
  if (!image)
    return {
      src: "",
      name: "",
    };

  if (typeof image === "object") return image as MediaValue;

  return JSON.parse(image) as MediaValue;
};
