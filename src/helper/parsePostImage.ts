export const parsePostImage = (image: string | object) => {
  type TFeaturedImage = {
    src: string;
  };
  if (typeof image === "string") {
    return JSON.parse(image) as TFeaturedImage;
  }
  return image as TFeaturedImage;
};