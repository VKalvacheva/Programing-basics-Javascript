function calculationsVacation(input) {
    let index = 0;
    let daysCount = 0;
    let moneyNeeded = Number(input[index++]);
    let availableMoney = Number(input[index++]);
    let spendCounter = 0;

    while(availableMoney < moneyNeeded) {
        let action = input[index++];
        let currentAmount = Number(input[index++]);
        daysCount++;
        if (action === "spend") {
            if (availableMoney < currentAmount) {
                availableMoney = 0;
            }
            else {
                availableMoney -= currentAmount;
            }
            spendCounter++;
            if (spendCounter === 5) {
                break;
            }
        }
        else {
            spendCounter = 0;
            availableMoney += currentAmount;
        }
    }
    if (spendCounter === 5) {
        console.log("You can't save the money.");
        console.log(`${daysCount}`);
    }
    else {
        console.log(`You saved the money for ${daysCount} days.`);
    }
}