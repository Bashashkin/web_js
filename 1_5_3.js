const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число N: ', (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i ** 2;
        }
    }
    console.log(sum);
    readline.close();
}) 