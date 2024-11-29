const readline = require('readline');

// Создаем интерфейс для ввода текста через консоль
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция нахождения остатка от деления двух чисел
function remainder(a, b) {
    // Проверка, что оба значения являются числами
    if (isNaN(a) || isNaN(b)) {
        return "Ошибка: Введите корректные числа.";
    }
    // Проверка на деление на ноль
    if (b == 0) {
        return "Ошибка: Деление на ноль недопустимо.";
    }
    // Если остаток отрицательный, добавляем делитель, чтобы остаток был положительным
    if (a%b < 0) {
        return a%b+Math.abs(b);
    } else {
    return a % b;
    }
}

// Функция запуска текстового интерфейса
rl.question("Введите первое число: ", (inputA) => {
    rl.question("Введите второе число: ", (inputB) => {
        // Преобразуем введенные значения в числа
        const a = parseFloat(inputA);
        const b = parseFloat(inputB);
        // Вызов функции для нахождения остатка от деления
        const result = remainder(a, b);
        // Вывод результата
        console.log("Результат:", result);
        rl.close();
    });
});
