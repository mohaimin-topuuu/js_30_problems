/* Some of all numbers in an array using function */

const myArr = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let sum = 0;

function sumOfArr() {
    for(let i = 0; i < myArr.length; i++) {
        sum += myArr[i];

    }

    console.log(sum)

}

sumOfArr(myArr);