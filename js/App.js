// Utils
const toBinary = num => {
    let bin = 0;
    let mul = 1;
    let rem;
    while (num) {
        rem = num % 2;
        bin += mul * rem;
        mul *= 10;

        num = Math.floor(num / 2);
    }
    return bin;
};

const toDecimal = num => parseInt(num, 2);

// DOM elements
const result = document.getElementById("res");
const zero = document.getElementById("btn0");
const one = document.getElementById("btn1");
const clearBtn = document.getElementById("btnClr");
const equalBtn = document.getElementById("btnEql");
const sumBtn = document.getElementById("btnSum");
const subBtn = document.getElementById("btnSub");
const mulBtn = document.getElementById("btnMul");
const divBtn = document.getElementById("btnDiv");

// Utils

// Appending to Result
const appendToResult = char => {
    const newResult = result.innerText + char;
    result.innerText = newResult;
};

// Event Listeners
zero.addEventListener("click", e => appendToResult(0));
one.addEventListener("click", e => appendToResult(1));
sumBtn.addEventListener("click", e => {
    appendToResult("+");
});
subBtn.addEventListener("click", e => {
    appendToResult("-");
});
mulBtn.addEventListener("click", e => {
    appendToResult("*");
});
divBtn.addEventListener("click", e => {
    appendToResult("/");
});

clearBtn.addEventListener("click", e => {
    result.innerText = "";
});

equalBtn.addEventListener("click", e => {
    let opIndex;
    const expression = result.innerText;
    for (opIndex = 1; opIndex <= expression.length; opIndex++) {
        if ("+-/*".includes(expression[opIndex])) break;
    }
    let a = expression.slice(0, opIndex);
    let b = expression.slice(opIndex + 1);

    let DecA = toDecimal(a);
    let DecB = toDecimal(b);

    let ans;

    if (expression[opIndex] == "+") ans = DecA + DecB;
    else if (expression[opIndex] == "-") ans = DecA - DecB;
    else if (expression[opIndex] == "*") ans = DecA * DecB;
    else ans = Math.floor(DecA / DecB);
    result.innerText = toBinary(ans);
});
