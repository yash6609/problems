
const lowerNumber = 2;
const higherNumber = 10;
console.log(`the prime number between ${lowerNumber} and ${higherNumber}`);
for(let i = lowerNumber; i <= higherNumber ; i++){
    let flag = 0;
    for(let j = 2; j < i; j++){
        if (i / j == 0 ){
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0){
        console.log("i");
    }
}