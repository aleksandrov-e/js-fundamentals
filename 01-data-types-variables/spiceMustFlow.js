function spiceMustFlow(startingYield) {
    let yieldAmount = startingYield;
    let totalSpice = 0;
    let days = 0;

    while (yieldAmount >= 100) {
        totalSpice += yieldAmount;
        totalSpice -= 26;
        days++;
        yieldAmount -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(days);
    console.log(totalSpice);
}
spiceMustFlow(111)