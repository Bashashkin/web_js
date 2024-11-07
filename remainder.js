// Напишите функцию,которая находит остаток от деления двух чисел

function remainder(a, b) {
    if (typeof a != 'number') {
        return console.log("Ошибка: Введите число.")
    } else if ((a != 0) && (b != 0)) {
        if (a > b) {
            console.log(a % b);
        } else {
            console.log(b % a);
        }
    } else {
        console.log("Ошибка: Деление на ноль недопустимо.");
    }
}

remainder(10, 11); // 1
remainder(10, 0); // Ошибка: Деление на ноль недопустимо.
remainder('hello') // Ошибка: Введите число.