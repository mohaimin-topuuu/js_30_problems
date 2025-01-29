const myArr = [11, 23, 34, 45, 67, 86];


function myFunction(numbers) {
    let max = numbers[0];
    for(const num of numbers) {
        
        if(num > max) {
            
            max = num;
        }
        
    }
    return max;
    

}


const maxNum = myFunction(myArr);

console.log(maxNum);