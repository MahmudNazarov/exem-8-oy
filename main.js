function updateClock() {
  const now = moment().format('hh:mm:ss A');
  const [time, period] = now.split(' ');
  const [hours, minutes, seconds] = time.split(':');

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('period').textContent = period;
}

setInterval(updateClock, 1000);
updateClock();
