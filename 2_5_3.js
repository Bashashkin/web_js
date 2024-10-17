const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите элементы массива через пробел: ', (arrayInput) => {
    const array = arrayInput.split(' ');
    const uniqueSet = new Set(array);
    console.log(Array.from(uniqueSet));
    readline.close()
});
