const secondHand = document.querySelector(".jarum_detik");
const minuteHand = document.querySelector(".jarum_menit");
const jarumJam = document.querySelector(".jarum_jam");

setInterval(function () {
  const date = new Date();

  const second = date.getSeconds();
  const secondDegres = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegres}deg)`;
  if (secondDegres === 90) {
    secondHand.style.transition = "none";
  } else if (secondDegres >= 91) {
    secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  const minutes = date.getMinutes();
  const minutesDegrees = (minutes/60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = date.getHours();
  const hoursDegrees = (hour/12) * 360 + 90;
  jarumJam.style.transform = `rotate(${hoursDegrees}deg)`;
});