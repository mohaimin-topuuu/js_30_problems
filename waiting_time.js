/*
Israat is waiting for a job interview. His serial will actually be called to him.  The list of those who interviewed on a screen on the wall shows the list and how many minutes each one takes.  Israat does not understand how long it will take for him.  Your job is to create a function called Waitingtime () to calculate how much time it takes Israat.
The function will take 2 input.  The first is the Array of a Number. Those who have completed the interview their interviewed time. The 2nd is Israat's serial number.  The function will find an average of the time for those whose interview is finished and find out how much time is needed to get to Israat's interview. The function will  return the needed time.  
Input: Function will take 2 inputs,  
One is Array (those who have siblings), the other is Israat's serial number.
Serial Number > Length of Array

Sample Input: [ 3, 5, 7, 11, 6 ], 10
Sample Output: 24
Sample Input: [13, 2], 6
Sample Output: 24
Sample Input: [13, 2, 6, 7, 10], 6
Sample Output: 0
Sample Input: [6], 4
Sample Output: 12
Sample Input: 7 , 10
Sample Output: Invalid Input
Sample Input: "[6,2]", 9
Sample Output: Invalid Input
Sample Input: [7, 8, 3, 4, 5], "9"
Sample Output: Invalid Input

*/


function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes)) {
        return "Invalid Input";
    }
    if (typeof serialNumber!== "number") {
        return "Invalid Input";
    }
    else {
        let sum = 0;
        for (let i = 0; i < waitingTimes.length; i++) {
            sum += waitingTimes[i];
        }
        let sumAvg = sum / waitingTimes.length;
        sumAvg = Math.round(sumAvg);
        aheadOfIsrat = (serialNumber -1) - waitingTimes.length;
        requiredTime = aheadOfIsrat * sumAvg;
        return requiredTime;
    }
}

const callFunction = waitingTime(waitingTimes, serialNumber);

console.log(callFunction);