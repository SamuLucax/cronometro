let startTime;
let intervalId;

const timerElement = document.getElementById('timer');
const startButton = document.querySelector('.start'); // Adicionei '.start' para selecionar o botão de classe 'start'
const stopButton = document.querySelector('.stop'); // Adicionei '.stop' para selecionar o botão de classe 'stop'
const resetButton = document.querySelector('.reset'); // Adicionei '.reset' para selecionar o botão de classe 'reset'

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  startTime = Date.now() - (startTime ? startTime : 0);
  intervalId = setInterval(updateTimer, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true; // Desativar o botão de reset durante a contagem
}

function stopTimer() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false; // Habilitar o botão de reset ao parar
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = null;
  timerElement.textContent = '00:00:00';
  startButton.disabled = false;
  stopButton.disabled = false;
  resetButton.disabled = true; // Desativar o botão de reset após a reinicialização
}

function updateTimer() {
  const currentTime = Date.now() - startTime;
  const hours = Math.floor(currentTime / 3600000);
  const minutes = Math.floor((currentTime % 3600000) / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);

  timerElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
