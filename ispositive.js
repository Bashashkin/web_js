// Напишите функцию, которая проверяет, положительное или отрицательное число

function isPositive(a) {
    if (typeof a != 'number') {
        return console.log("Ошибка: Введите число");
    }
    if (a >= 0) {
        return console.log("Число положительное");
    } else {
        return console.log("Число отрицательное");
    }
}

isPositive('123'); // Ошибка: Введите число
isPositive(123); // Число положительное
isPositive(-1.23); // Число отрицательное
isPositive('asd', -1); // Ошибка: Введите число