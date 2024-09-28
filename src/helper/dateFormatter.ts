export const dateFormatter = (dateStr: string) => {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return formattedDate;
};
