/*
*Aaron is a successful hotel businessman. His hotel is becoming very popular and it is very important to have a clear idea of ​​his income and cost at the end of the month. You will create a function to help him to calculate the correct tax from his monthly income and cost.
Your function will take two inputs:
Monthly Income - A positive number that reveals Aaron's monthly income.
Monthly Cost - A positive number that reveals the monthly cost of Aaron.
The function will calculate 20% of income and cost differences and return as a tax.
Sample Input: 10000, 3000
Output: 1400
Input: 34000, 1753
Output: 6449.400000000001
Input: 5000, 1500
Output: 700
Input: -5000, 2000
Output: Invalid Input
Input: 6000, -1500
Output: Invalid Input



*/


function calculateTax (income, expenditure) {
    if(income < expenditure || income < 0 || expenditure < 0) {
        return "Invalid Input";
    }
    else {
        const profit = income - expenditure;
        tax = profit * 0.2;
        return tax;
    }
}


const callFunction = calculateTax(input, output);

console.log(callFunction);