function calculateTennisStats(input) {
    const numTournaments = Number(input[0]);
    const startingPoints = Number(input[1]);

    let totalPointsEarned = 0;
    let wins = 0;

    for (let i = 2; i < 2 + numTournaments; i++) {
        const result = input[i];
        if (result === "W") {
            totalPointsEarned += 2000;
            wins++;
        } else if (result === "F") {
            totalPointsEarned += 1200;
        } else if (result === "SF") {
            totalPointsEarned += 720;
        }
    }

    const finalPoints = startingPoints + totalPointsEarned;
    const averagePoints = Math.floor(totalPointsEarned / numTournaments);
    const winPercentage = (wins / numTournaments * 100).toFixed(2);

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercentage}%`);
}
