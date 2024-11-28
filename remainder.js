const readline = require('readline');

// Создаем интерфейс для ввода текста через консоль
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция нахождения остатка от деления двух чисел
function remainder(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Ошибка: Введите числа.";
    } else if (b === 0 || a === 0) {
        return "Ошибка: Деление на ноль недопустимо.";
    } else if (a > b) {
        return a % b;
    } else {
        return b % a;
    }
}

// Функция запуска текстового интерфейса
function runInterface() {
    rl.question("Введите первое число: ", (inputA) => {
        rl.question("Введите второе число: ", (inputB) => {
            const a = parseFloat(inputA);
            const b = parseFloat(inputB);

            const result = remainder(a, b);
            console.log("Результат:", result);

            rl.close(); // Закрываем интерфейс после выполнения
        });
    });
}

runInterface();
