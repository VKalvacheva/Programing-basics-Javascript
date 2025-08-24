function actorNomination(input) {
    let actorName = input[0];
    let totalPoints = Number(input[1]);
    let judgesCount = Number(input[2]);

    let index = 3;

    for (let i = 0; i < judgesCount; i++) {
        let judgeName = input[index++];
        let judgePoints = Number(input[index++]);

        totalPoints += (judgeName.length * judgePoints) / 2;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = (1250.5 - totalPoints).toFixed(1);
    console.log(`Sorry, ${actorName} you need ${neededPoints} more!`);
}
