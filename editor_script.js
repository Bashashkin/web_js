document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('drawing-canvas');
  const ctx = canvas.getContext('2d');
  
  // Установка размера холста (по умолчанию)
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.6;

  // Переменные для рисования
  let isDrawing = false;   // Флаг, указывающий, рисуем ли мы
  let brushColor = '#000000'; // Цвет кисти
  let brushSize = 5;         // Размер кисти

  // Элементы управления
  const colorPicker = document.getElementById('color-picker');
  const brushSizeInput = document.getElementById('brush-size');
  const sizeDisplay = document.getElementById('size-display');

  // Обновление цвета кисти
  colorPicker.addEventListener('input', (e) => {
    brushColor = e.target.value;
  });

  // Обновление размера кисти
  brushSizeInput.addEventListener('input', (e) => {
    brushSize = e.target.value;
    sizeDisplay.textContent = brushSize;
  });

  // Начало рисования
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath(); // Начинаем новый путь для рисования
    ctx.moveTo(e.offsetX, e.offsetY); // Устанавливаем начальную точку
  });

  // Рисование
  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      ctx.lineTo(e.offsetX, e.offsetY); // Линия к текущей позиции мыши
      ctx.strokeStyle = brushColor;    // Устанавливаем цвет кисти
      ctx.lineWidth = brushSize;       // Устанавливаем размер кисти
      ctx.lineCap = 'round';           // Делаем концы линий круглыми
      ctx.stroke();                    // Рисуем линию
    }
  });

  // Завершение рисования
  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath(); // Завершаем текущий путь
  });

  // Прерывание рисования, если курсор вышел за пределы холста
  canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
  });
});
