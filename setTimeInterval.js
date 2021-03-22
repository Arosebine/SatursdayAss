let stopClock = window.setInterval(counterDown, 1000);
window.setTimeout(endExam, 1000 * 11);
//window.setTimeout();

function counterDown() {
  let clock = document.getElementById('clock');
  let clockValue = parseInt(clock.innerHTML);
  clockValue = clockValue - 1;
  if (clockValue === 0) window.clearInterval(stopClock);
  clock.innerHTML = clockValue;
}

function endExam() {
  window.location.href = 'stop.html';
}
