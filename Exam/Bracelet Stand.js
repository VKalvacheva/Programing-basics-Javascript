function braceletStand(pocketMoneyPerDay, earningsPerDay, expenses, giftPrice) {
    const days = 5; 

    const savedFromPocket = pocketMoneyPerDay * days;
    const earnedFromSales = earningsPerDay * days;

   
    const totalSaved = savedFromPocket + earnedFromSales - expenses;

    if (totalSaved >= giftPrice) {
        console.log(`Profit: ${totalSaved.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        const shortage = giftPrice - totalSaved;
        console.log(`Insufficient money: ${shortage.toFixed(2)} BGN.`);
    }
}
