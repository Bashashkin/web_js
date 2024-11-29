document.addEventListener('DOMContentLoaded', () => {

  // Переменные для хранения состояния таймера
  let countdownTimer;
  let timeRemaining; // Оставшеея время в секундах
  let isRunning = false;

  const timeDisplay = document.getElementById('time-display');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');
  const startButton = document.getElementById('start-button');
  const pauseButton = document.getElementById('pause-button');
  const resetButton = document.getElementById('reset-button');

  // Функция для обновления отображаемого времени
  function updateTimeDisplay() {
    // Вычисляем количество минут и секунд  
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    // Обновляем отображение на странице (добавляем ведущие нули)
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  // Функция для запуска таймера
  function startTimer() {
    if (isRunning) return;

    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);
    timeRemaining = minutes * 60 + seconds;

    updateTimeDisplay();
    isRunning = true;
    
    countdownTimer = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateTimeDisplay();
      } else {
        clearInterval(countdownTimer);
        isRunning = false;
        alert('Время вышло!');
      }
    }, 1000);

    // Отключаем кнопку старта после запуска
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
  }

  // Функция для паузы таймера
  function pauseTimer() {
    clearInterval(countdownTimer);
    isRunning = false;
    
    // Включаем кнопки
    startButton.disabled = false;
    pauseButton.disabled = true;
  }

  // Функция для сброса таймера
  function resetTimer() {
    clearInterval(countdownTimer);
    isRunning = false;
    timeRemaining = 0;
    updateTimeDisplay();
    
    // Включаем кнопки
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
  }

  // Обработчики событий кнопок
  startButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);
});
