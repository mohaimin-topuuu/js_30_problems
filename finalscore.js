/*
*Rakib is working as a programmer at a software company. His younger brother, Rajiv, took admission test at a famous university. The results of the admission test will be determined based on different criteria. Rajiv's exam score, school grade, and guardian's profession (if "farmer") we will have to figure out its final score. Since you are a colleague and good programmer of Rakib, Rakib wants you to make a function CalculateFinalscore ().Which will take the final score as Rajiv's various information input. If the final score is 80 or more, then he can be admitted. Otherwise, he will not be admitted. 
Scoring criteria
TESTSCore: 50 points highest
Schoolgrade: 30 points highest
Parent Profession: If "Farmer", 20 points
Input: Take as an object input.  Object will definitely contain NAME, TESTSCore, Schoolgrade, isffamily properties.  Where 
Typeof Name = string 
Typeof Testscore = Number (Testscore <= 50) 
Typeof Schoolgrade = Number (Schoolgrade <= 30) 
Typeof isffamily = boolean


Output: It will return a Boolean value: True / False

Challenge 📢: If the input is not Object then an error message will give as "invalid input"

Sample Input: 
Input: { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
Output: true
Input: { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
Output: false
Input: "hello" 
Output: Invalid Input                    
Input: { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
Output: false               


*/

function calculateFinalScore(userName) {
    if (typeof userName !== "object") {
        return "Invalid Input";
    }

    else if (userName.isFFamily == true) {
        if(userName.testScore + userName.schoolGrade + 20 >= 80) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (userName.isFFamily == false) {
        if(userName.testScore + userName.schoolgrade >= 80) {
            return true;
        }
        else {
            return false;
        }
    }
}


const callFunction = calcuateFinalScore(userName);

console.log(callFunction);