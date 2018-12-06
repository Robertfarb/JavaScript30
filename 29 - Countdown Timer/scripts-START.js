let countdown;
const timerDisplay = document.querySelector(".display__time-left");

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    displayTimeLeft(secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  timerDisplay.textContent = display;
  document.title = display;
  console.log({minutes, remainderSeconds});
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  const endTime = document.querySelector(".display__end-time");

  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ?
  '0' : ''}${minutes}`
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  console.log(button.dataset)
  button.addEventListener('click', () => timer(parseInt(button.dataset.time)))
});

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
