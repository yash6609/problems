
function padhe(number) {
    for(let i = 1; i <= 10; i++){
        const result = i * number
        console.log(`${number} * ${i} = ${result}`);
    }
}

function areaOfCircle(radius) {
    return 3.14 * radius * radius;
}

padhe(9);

const radius = 3;
console.log('Area of circle with radius ' + radius + ' is ' + areaOfCircle(radius));
