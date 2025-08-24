function smartLilly(age, washingMachinePrice, toyPrice) {
    let savedMoney = 0;
    let toyCount = 0;
    let moneyGift = 10;

    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 === 0) {
            
            savedMoney += moneyGift - 1;
            moneyGift += 10;
        } else {
            
            toyCount++;
        }
    }

    savedMoney += toyCount * toyPrice;

    const diff = Math.abs(savedMoney - washingMachinePrice).toFixed(2);

    if (savedMoney >= washingMachinePrice) {
        console.log(`Yes! ${diff}`);
    } else {
        console.log(`No! ${diff}`);
    }
}
