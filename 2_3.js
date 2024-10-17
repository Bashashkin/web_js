const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите элементы первого массива через пробел: ', (firstArrayInput) => {
    const firstArray = firstArrayInput.split().map(item => item.trim());

    readline.question('Введите элементы второго массива через пробел: ', (secondArrayInput) => {
        const secondArray = secondArrayInput.split().map(item => item.trim());

        const combinedArray = firstArray.concat(secondArray);

        console.log(combinedArray);
        readline.close();
    });
});