const timerElement = document.getElementById("timer");

window.onload = function() {
  startTimer();
};

function startTimer() {
  const startTime = new Date();

  setInterval(() => {
    const currentTime = new Date();
    const timeDiff = currentTime - startTime;
    const formattedTime = formatTime(timeDiff);
    timerElement.textContent = formattedTime;
  }, 1000);
}

function formatTime(time) {
  let hours = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}