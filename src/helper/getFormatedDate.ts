export const getFormattedDate = (date: string) =>
  new Intl.DateTimeFormat("en-ng", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
