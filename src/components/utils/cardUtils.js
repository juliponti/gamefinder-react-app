export const formatDate = (string) => {
  const d = new Date(string);
  return d.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const getGenres = (arr) => {
  return arr.map((genre) => genre.name).join(", ");
};
