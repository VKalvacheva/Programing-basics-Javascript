function calculateCoins(change) {
   
    let remaining = Math.round(change * 100);

    const coins = [200, 100, 50, 20, 10, 5, 2, 1];

    let coinCount = 0;

    for (let coin of coins) {
        while (remaining >= coin) {
            remaining -= coin;
            coinCount++;
        }
    }

    console.log(coinCount);
}
