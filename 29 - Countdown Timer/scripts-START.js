let countdown;
const timerDisplay = document.querySelector(".display__time-left");

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

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
  const minutes = end.getMinutes();
  const endTime = document.querySelector(".display__end-time");

  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ?
  '0' : ''}${minutes}`
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  console.log(button.dataset)
  button.addEventListener('click', () => timer(parseInt(button.dataset.time)))
});
