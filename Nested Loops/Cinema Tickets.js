function cinemaTickets(input) {
    let index = 0;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (true) {
        let movieName = input[index++];
        if (movieName === "Finish") {
            break;
        }
        let freeSeats = Number(input[index++]);
        let soldTicketsForMovie = 0;

        while (soldTicketsForMovie < freeSeats) {
            let ticketType = input[index++];
            if (ticketType === "End") {
                break;
            }

            soldTicketsForMovie++;
            totalTickets++;

            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standardTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            }
        }

        let percentFull = (soldTicketsForMovie / freeSeats) * 100;
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
