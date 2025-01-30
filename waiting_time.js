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