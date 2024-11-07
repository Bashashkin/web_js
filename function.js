// Напишите функцию,которая приветствует по имени 

function greet(name) {
    if (typeof name != 'string') {
        return console.log('Ошибка: используйте символы')
    } else {
        return console.log('Привет, ', name);
    }
}

greet("Алексей"); // Привет,  Алексей
greet(123); // Ошибка: имя должно состоять только из символов