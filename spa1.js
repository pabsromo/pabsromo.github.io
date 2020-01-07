let time = document.getElementById('time');

if(time) {
    document.getElementById('start').addEventListener('click', function() {
      time.innerHTML = 'working!';
  });
}
