function calculateSantaVacation(days, roomType, feedback) {
    let nights = days - 1; 
    let pricePerNight = 0;

    
    switch(roomType) {
        case "room for one person":
            pricePerNight = 18.00;
            break;
        case "apartment":
            pricePerNight = 25.00;
            break;
        case "president apartment":
            pricePerNight = 35.00;
            break;
    }

    
    let totalPrice = nights * pricePerNight;

    
    if (roomType === "apartment") {
        if (days < 10) {
            totalPrice *= 1; 
        } else if (days >= 10 && days <= 15) {
            totalPrice *= 0.65; 
        } else if (days > 15) {
            totalPrice *= 0.50; 
        }
    } else if (roomType === "president apartment") {
        if (days < 10) {
            totalPrice *= 0.90; 
        } else if (days >= 10 && days <= 15) {
            totalPrice *= 0.85; 
        } else if (days > 15) {
            totalPrice *= 0.80; 
        }
    }
    

    if (feedback === "positive") {
        totalPrice *= 1.25; // +25%
    } else if (feedback === "negative") {
        totalPrice *= 0.90; // -10%
    }

    
    return totalPrice.toFixed(2);
}
