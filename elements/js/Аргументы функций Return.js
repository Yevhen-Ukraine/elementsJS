const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    //console.log(curr * amount);
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
    return function() {};/* В основе приема компонента высшего порядка лежит то, что функкция возвращает функцию */
}

convert(500, usdCurr);
convert(500, eurCurr);

//promotion(convert(500, usdCurr));
const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return /* return завершает функцию  */
    }
    console.log("Done");
}
test(); 