// Find the minimum number from an array

const myArr = [11, 34, 51, 12, 6, 86];


function myFunction(numbers) {

    let min = numbers[0];
    for(const num of numbers) {
        if(num < min) {
            min = num;
        }


    }

    return min;


}


const min = myFunction(myArr);

console.log(min);