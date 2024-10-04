const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число a: ', (a) => {
    readline.question('Введите число b: ', (b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        console.log(a)
        readline.close();
    })
});
