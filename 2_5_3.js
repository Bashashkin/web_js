const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите элементы массива через пробел: ', (arrayInput) => {
    const array = arrayInput.split(' ');
    const uniqueSet = new Set(array);
    rl.close();
    console.log(uniqueSet)
});
