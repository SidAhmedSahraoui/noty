export const Days = (date) => {
  let Day = 24 * 60 * 60 * 1000;
  let Mm = Day * 30;
  let Yy = Mm * 12;
  date = new Date(date).getTime();
  let today = new Date().getTime();

  let diffDays = Math.round(Math.abs((date - today) / Day));
  let diffMonths = Math.round(Math.abs((date - today) / Mm));
  let diffYears = Math.round(Math.abs((date - today) / Yy));
  let result = diffYears
    ? diffYears + " years ago"
    : diffMonths
    ? diffMonths + " months ago"
    : diffDays
    ? diffDays + " Days ago"
    : "Today";
  return result;
};

export const Old = (date) => {
  let mon = new Date(date).getMonth();
  let year = new Date(date).getUTCFullYear();
  let month;
  switch (mon) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "";
  }

  let result = month + " " + year;
  return result;
};
