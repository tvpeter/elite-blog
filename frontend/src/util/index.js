export const dateFormatter = (date) => {
  let dateStr = new Date(date);
  let month = dateStr.toLocaleString("default", { month: "short" });
  let day = dateStr.getDate();
  let year = dateStr.getFullYear();
  return `${month} ${day}, ${year}`;
};
