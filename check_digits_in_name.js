function checkDigitsInName(userString) {
    for (let char of userString) {
        if(char >= '0' && char <= '9') {
            return true;
        }
        else if (typeof userString !== "string") {
            return "Invalid Input";
        }
    }
    return false;
}