type Create2DMatrixFromStringArray<T> = (images: T[], currentIndex?: number, result?: T[][]) => T[][];

export const create2dMatrixFromStringArray: Create2DMatrixFromStringArray<{ image: { src: string } }> = (
  images,
  currentIndex = 0,
  result = []
) => {
  if (!images || !images[currentIndex]) return result;

  const endIndex = currentIndex + 8;
  result.push(images.slice(currentIndex, endIndex));

  return create2dMatrixFromStringArray(images, endIndex, result);
};
