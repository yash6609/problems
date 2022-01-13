

const a = 60;
const b = 72;

for (let i = 1; i <= a && i <= b; i++){

    if ( a % i == 0 &&  b % i == 0 ) {
        hcf = i;
    }
}
console.log(`the hcf of given value is ${hcf}`);