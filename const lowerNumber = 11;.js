const lowerNumber = 11;
const lowerNumber = 12;
console.log(`The prime number ${loweNumber} and ${higherNumber} are: `);
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0
    for (let j = 2; j < i; j++){
        if (i / j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}