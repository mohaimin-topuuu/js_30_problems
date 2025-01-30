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