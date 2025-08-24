function fishingBoat(budget, season, fishermen) {
    let basePrice;

    // Определяме базова цена според сезона
    switch (season) {
        case "Spring":
            basePrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            basePrice = 4200;
            break;
        case "Winter":
            basePrice = 2600;
            break;
    }

    // Отстъпка според броя рибари
    if (fishermen <= 6) {
        basePrice *= 0.90;
    } else if (fishermen >= 7 && fishermen <= 11) {
        basePrice *= 0.85;
    } else if (fishermen >= 12) {
        basePrice *= 0.75;
    }

    // Допълнителна отстъпка от 5% ако броят рибари е четен и НЕ е есен
    if (fishermen % 2 === 0 && season !== "Autumn") {
        basePrice *= 0.95;
    }

    const diff = Math.abs(budget - basePrice).toFixed(2);

    if (budget >= basePrice) {
        console.log(`Yes! You have ${diff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff} leva.`);
    }
}
