const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите элементы первого массива через пробел: ', (array1) => {
    const array1_input = array1.split(' ');
    readline.question('Введите элементы второго массива через пробел: ', (array2) => {
        const array2_input = array2.split(' ');
        const combinedArray = array1.concat(array2);
        console.log(combinedArray);
        readline.close();
    });
});