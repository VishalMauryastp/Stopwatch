let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 00;
let minute = 00;
let sec = 00;
let count = 00;
stopBtn.addEventListener("click", () => {
  timer = false;
  console.log("stop");
});
startBtn.addEventListener("click", () => {
  timer = true;
  console.log("start");
  stopWatch();
});
resetBtn.addEventListener("click", () => {

  timer = false;
  hour = 0;
  minute = 0;
  sec = 0;
  count = 0;
  document.querySelector(".hours").innerHTML = "00";
  document.querySelector(".minute").innerHTML = "00";
  document.querySelector(".Sec").innerHTML = "00";
  document.querySelector(".count").innerHTML = "00";
  console.log("reset");
});
const stopWatch = () => {
  if (timer) {
    count++;

    if (count == 100) {
      sec++;
      count = 0;
    }
    if (sec == 60) {
      minute++;
      sec = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      sec = 0;
    }
    var hr = hour;
    var min = minute;
    var sc = sec;
    var cn = count;

    if (hour < 10) {
      hr = "0" + hr;
    }

    if (minute < 10) {
      min = "0" + min;
    }

    if (sec < 10) {
      sc = "0" + sc;
    }
    if (count < 10) {
      cn = "0" + cn;
    }
    document.querySelector(".hours").innerHTML = hr;
    document.querySelector(".minute").innerHTML = min;
    document.querySelector(".Sec").innerHTML = sc;
    document.querySelector(".count").innerHTML = cn;
    setTimeout(() => {
      stopWatch();
    }, 1);
  }
};
