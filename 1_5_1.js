const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число N: ', (n)=> {  
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
    readline.close();
}) 