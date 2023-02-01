import { DateTime } from "../luxon.js";

function displayDate() {
  const date = document.getElementById('date');
  const dateOnly = DateTime.local().toString().substring(0, 10);
  const timeonly = DateTime.local().toString().substring(11, 19);
  date.innerHTML = `${dateOnly} ${timeonly}`;

  setInterval(displayDate, 1000);
}

export default displayDate;
