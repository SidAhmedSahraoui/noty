const Days = (date) => {
  let Day = 24 * 60 * 60 * 1000;
  date = new Date(date).getTime();
  let today = new Date().getTime();
  let diffDays = Math.round(Math.abs((date - today) / Day));
  let result = diffDays ? diffDays + " " + "day ago" : "Today";
  return result;
};
export default Days;
