function vacation(budget, season) {
    let destination = "";
    let accommodation = "";
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            accommodation = "Camp";
            price = budget * 0.30;
        } else {
            accommodation = "Hotel";
            price = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            accommodation = "Camp";
            price = budget * 0.40;
        } else {
            accommodation = "Hotel";
            price = budget * 0.80;
        }
    } else {
        destination = "Europe";
        accommodation = "Hotel";
        price = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${price.toFixed(2)}`);
}
