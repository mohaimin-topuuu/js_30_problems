/*
*Raju has created a new website for passport registration.  Many people are making mistakes as well as different numbers while inputing the name. Which Raju does not want at all.  So you have to help Raju. You will write a function called Checkdigitsinname () that will take a string input and check if there is a number in the name. 
If there is a number inside the name, then True will return. If there is no number, FALSE will return. If the input is not a string, the invalid input will return.
Input: Raj123
Output: true
Input: n9ayeem
Output: true
Input: e1mu3
Output: true
Input: Suman
Output: false
Input: Name2024
Output: true
Input: !@#
Output: false
Input: ["Raj"]
Output: Invalid Input




*/




function checkDigitsInName(userString) {
    for (let char of userString) {
        if(char >= '0' && char <= '9') {
            return true;
        }
        else if (typeof userString !== "string") {
            return "Invalid Input";
        }
    }
    return false;
}


const callFunction = checkDigitsInName(userString);

console.log(callFunction);