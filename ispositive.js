const readline = require('readline');

// Создаем интерфейс для ввода текста через консоль
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция проверки, положительное или отрицательное число
function isPositive(a) {
    if (isNaN(a)) { // если не число
        return "Ошибка: Введите корректное число";
    }
    if (a >= 0) {
        return "Число положительное";
    } else {
        return "Число отрицательное";
    }
}

rl.question("Введите число: ", (inputA) => {
    const a = parseFloat(inputA); // выведет NaN, если на вход пойдет не число
    const result = isPositive(a);
    console.log(result);

    rl.close(); 
});
