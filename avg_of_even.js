function myFunction(myArr) {

    const evenArr = []

    for(const evenNums of myArr) {
        if(evenNums % 2 === 0) {

            evenArr.push(evenNums);
        }

    }
    let sum = 0;

    for (const sumOfEven of evenArr) {
        sum += sumOfEven;



    }
    const avg = sum / evenArr.length;

    return avg;

}


const myArr = [12, 34, 51, 55, 62, 49, 77, 100];

const evenAvg = myFunction(myArr);

console.log(evenAvg);

