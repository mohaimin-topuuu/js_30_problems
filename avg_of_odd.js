// Calculate the average of the odd numbers in an array
function myFunction(myArr) {

    oddsArr = [];

    for(const oddNumbers of myArr) {
        if (oddNumbers % 2 === 1) {
            
            oddsArr.push(oddNumbers)


        }



    }

    let sum = 0;

    for (const oddNumbersSum of oddsArr) {

        sum = sum + oddNumbersSum;


    }

    const avg = sum / oddsArr.length;

    return avg;



}


const myArr = [23, 43, 44, 63, 22, 47];


const avg = myFunction(myArr);

console.log(avg);


