const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

const TIMER_DELAY = 1000;
let timerId = null;
btnStop.disabled = true;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

createMarkup();

function onStart(e) {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, TIMER_DELAY);
}

function onStop(e) {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId);
  createMarkup();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createMarkup() {
  btnStart.style.backgroundColor = getRandomHexColor();
  btnStart.style.fontSize = '30px';
  btnStart.style.border = 'none';
  //btnStart.style.color = getRandomHexColor();

  btnStop.style.backgroundColor = getRandomHexColor();
  btnStop.style.border = 'none';
  btnStop.style.fontSize = '30px';
  //btnStop.style.color = getRandomHexColor();
}
