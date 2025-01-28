// Convert inch to feet
// Method 1

function myFunction(inch) {
    const convert = inch / 12;

    return convert;
}

const finalResult = myFunction(72);

console.log(finalResult)

//Method 2


function myFunction(inch) {
    feetResult = inch / 12;
    feetResult = parseInt(feetResult);
    inchResult = inch % 12;
    finalResult = "Your Height is " + feetResult + " feet and " + inchResult + " inch";
    return finalResult;
}

const height = myFunction(75);

console.log(height);