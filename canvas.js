document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('lineCanvas');
    const ctx = canvas.getContext('2d');

    // Устанавливаем размер холста
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    // Переменные для рисования
    let isDrawing = false; // Флаг: рисуем ли сейчас
    let lastX = 0, lastY = 0; // Координаты последней точки

    // Кнопка "Очистить холст"
    const clearButton = document.getElementById('clearCanvas');

    // Начало рисования
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true; // Включаем рисование
        [lastX, lastY] = [e.offsetX, e.offsetY]; // Запоминаем начальные координаты
    });

    // Рисование линии
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return; // Если не рисуем, ничего не делаем

        ctx.beginPath(); // Начинаем новый путь
        ctx.moveTo(lastX, lastY); // Переходим к последней точке
        ctx.lineTo(e.offsetX, e.offsetY); // Рисуем линию к текущей позиции курсора
        ctx.strokeStyle = 'black'; // Устанавливаем цвет линии
        ctx.lineWidth = 2; // Устанавливаем толщину линии
        ctx.stroke(); // Рисуем линию

        [lastX, lastY] = [e.offsetX, e.offsetY]; // Обновляем последнюю точку
    });

    // Завершение рисования
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false); // Останавливаем рисование, если курсор вышел за пределы холста

    // Событие: очистка холста
    clearButton.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем весь холст
    });
});
