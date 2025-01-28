//Count the repeated items in an array
const myArr =  [5, 6, 11, 12, 98, 5, 5, 5];

const find = 5;


function myFunction(myArr) {

    let count = 0;

    for(const numbers of myArr) {

        

        if(numbers === find) {

            count ++;

        }

        
    }

    return count;

    


}

const countedResult = myFunction(myArr);


console.log(countedResult);