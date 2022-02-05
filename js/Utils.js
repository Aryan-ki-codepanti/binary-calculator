
const toBinary = num => {
    let bin = 0;
    let mul = 1;
    let rem;
    while(num){
        rem = num % 2;
        bin += (mul * rem);
        mul *= 10;

        num = Math.floor(num / 2);
    }
    return bin;
}

const toDecimal = num => parseInt(num , 2);

