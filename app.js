let hours = document.querySelector('#clock_hrs');
let minutes = document.querySelector('#clock_min');
let seconds = document.querySelector('#clock_sec');

setInterval(() => {
  let currentTime = new Date();

  hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
  
}, 1000);
