// Напишите функцию,которая приветствует по имени 

const readline = require('readline');

// Создаем интерфейс для чтения из консоли
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция приветствия
function greet(name) {
    if (!name) {
        return "Привет, безымянный!";
    }
    return `Привет, ${name}! Приятно познакомиться!`;
}

// Запрашиваем имя пользователя
rl.question('Как Вас зовут? ', (name) => {
    console.log(greet(name));
    rl.close(); 
});
