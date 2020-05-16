let time = document.getElementById('time');
let timeCount = 0;
let timer;
let goTime = true;

document.getElementById('start').addEventListener('click', function() {
  if(goTime) {
    goTime = false;
    timer = setInterval(function() {
      timeCount++;
      time.innerHTML = timeCount;
    }, 1000);
  }
});

document.getElementById('stop').addEventListener('click', function() {
  goTime = true;
  clearInterval(timer);
});

document.getElementById('restart').addEventListener('click', function() {
  goTime = true;
  clearInterval(timer);
  timeCount = 0;
  time.innerHTML = timeCount;
});
