// Convert miles to kilometers 

function myFunction(givenMiles) {
    convertedMiles = givenMiles / 1.6;

    convertedMiles = "Your given Miles is converted to " + convertedMiles + " Kilomteres. "

    return convertedMiles;

}

const finalResult = myFunction(200);

console.log(finalResult);