function hotelPricing(month, nightsCount) {
    nightsCount = Number(nightsCount);
    let apartmentPrice = 0;
    let studioPrice = 0;

    if (month == "May" || month == "October") {
        apartmentPrice = nightsCount * 65;
        studioPrice = nightsCount * 50;
        if (nightsCount > 7 && nightsCount <= 14) {
            studioPrice -= studioPrice * 0.05;
        }
        else if ( nightsCount > 14) {
            studioPrice -= studioPrice * 0.30;
            apartmentPrice -= apartmentPrice * 0.10;
        }
    }
    else if (month == "June" || month == "September") {
        apartmentPrice = nightsCount * 68.70;
        studioPrice = nightsCount * 75.20;
        if ( nightsCount > 14) {
            studioPrice -= studioPrice * 0.20;
            apartmentPrice -= apartmentPrice * 0.10;
        }
    }
    else if (month == "July" || month == "August") {
        apartmentPrice = nightsCount * 77;
        studioPrice = nightsCount * 76;
        if ( nightsCount > 14) {
            apartmentPrice -= apartmentPrice * 0.10;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}