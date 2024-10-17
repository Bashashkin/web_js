const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = ['a', 'b', 'c', 'd', 'a'];
console.log(arr);
readline.question('Введите элемент и мы найдем его индекс в массиве! ', (a) => {
    const index = arr.indexOf(a);
    if (index !== -1) {
        console.log(arr.indexOf(a))
    } else {
        console.log('Элемент не найден в данном массиве')
    }
    readline.close();
});
;