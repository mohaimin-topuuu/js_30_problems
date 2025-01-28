// Count the vowels in a string

const myString = "HELLO, My name is Abdullah Al Mohaimin Topu";


function myFunction(myString) {
    const vowels = "AEIOUaeiou";

    let count = 0;

    for (const char of myString) {
        if(vowels.includes(char)) {
            count ++;
        }


    }
    return count;
    
}


const vowelCounter = myFunction(myString);


console.log(vowelCounter);