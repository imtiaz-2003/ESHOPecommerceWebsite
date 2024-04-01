let dayItem = document.querySelector("#days");
let hourItem = document.querySelector("#hour"); // Update to match the ID in the HTML
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countdown = () => {
  let futureDate = new Date(" 10 JUNE 2024");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;
  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  dayItem.innerHTML = days;
  hourItem.innerHTML = hours; // Update to match the ID in the HTML
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};

countdown();
setInterval(countdown, 1000);
