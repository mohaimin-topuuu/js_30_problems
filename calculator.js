//Make a function using nested function

function addFunction(a, b) {
    const add = a + b;

    return add;



}
function substractFunction(a, b) {
    const substract = a - b;

    return substract;



}
function multiplicationFunction(a, b) {
    const multiplication = a * b;

    return multiplication;



}
function divideFunction(a, b) {
    const divide = a / b;

    return divide;



}

function calculator (a, b, operation) {
    if (operation === 'add') {
        const sum = addFunction(a, b);

        return sum;


    }

    else if(operation === 'substract') {

        const sub = substractFunction(a, b);

        return sub;

    }

    else if(operation === 'multiplication') {
        const mult = multiplicationFunction(a, b);

        return mult;
    }

    else if(operation === 'divide') {
        const divide = divideFunction(a, b);

        return divide;

    }

    else {
        return "ONLY 'Add', 'Substract', 'multiplication' and 'divide' possible!";
    }




}
const calc = calculator(5, 6, 'multiplication');

console.log(calc);