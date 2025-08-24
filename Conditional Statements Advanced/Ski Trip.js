function skiTrip(days, acommodation, grade) {
    days = Number(days);
    let nights = days - 1;
    let price = 0;
    let priceAfterPromo = 0;
    let priceAfterGrade = 0;
    if ( acommodation == "apartment") {
        price = nights * 25.00;
        if (nights < 10) {
            priceAfterPromo = price - (price * 0.30);
        }
        else if (nights >= 10 && nights <= 15) {
            priceAfterPromo = price - (price * 0.35);
        }
        else if (nights > 15) {
            priceAfterPromo = price - (price * 0.50);
        }

        if (grade == "positive") {
            priceAfterGrade = priceAfterPromo + (priceAfterPromo * 0.25);
            console.log(priceAfterGrade.toFixed(2));
        }
        else {
            priceAfterGrade = priceAfterPromo - (priceAfterPromo * 0.10);
            console.log(priceAfterGrade.toFixed(2));
        }
    }
    else if (acommodation == "president apartment") {
        price = nights * 35.00;
        if (nights < 10) {
            priceAfterPromo = price - (price * 0.10);
        }
        else if (nights >= 10 && nights <= 15) {
            priceAfterPromo = price - (price * 0.15);
        }
        else if (nights > 15) {
            priceAfterPromo = price - (price * 0.20);
        }

        if (grade == "positive") {
            priceAfterGrade = priceAfterPromo + (priceAfterPromo * 0.25);
            console.log(priceAfterGrade.toFixed(2));
        }
        else {
            priceAfterGrade = priceAfterPromo - (priceAfterPromo * 0.10);
            console.log(priceAfterGrade.toFixed(2));
        }
    }
    else if (acommodation == "room for one person") {
        price = nights * 18.00;

        if (grade == "positive") {
            priceAfterGrade = price + (price * 0.25);
            console.log(priceAfterGrade.toFixed(2));
        }
        else {
            priceAfterGrade = price - (price * 0.10);
            console.log(priceAfterGrade.toFixed(2));
        }
    }
}