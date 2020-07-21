const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let showTime;

let countDown = new Date(2020, 06, 26, 17).getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;
      showTime = new Date(2020, 6, 26, 16, 40).getTime() - now;

    if (showTime <= 0) {
      document.getElementById('workshopLink').hidden = false;
    }
    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  }, second)

