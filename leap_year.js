// Check if the year is leap year or not
//Condition--- If the given year is divisible by 4 and 400 it is a leap year. If it's not divisible by 100 it is a leap year.

function leapYear(givenYear) {
    if(givenYear % 100 !== 0  && givenYear % 4 === 0) {
        return true;
    }
    else if (givenYear % 100 == 0 && givenYear % 400 === 0) {
        return true;
    }
    else {
        return false;
    }


}


const leapYearCount = leapYear(2400);


console.log(leapYearCount)