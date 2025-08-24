function solveCakeProblem(input) {
    let index = 2;
    let width = Number(input[0]);
    let length = Number(input[1]);
    let cakeSize = width * length;
    let piecesCount = 0;

    while (input[index] !== "STOP") {
        let currentPieces = Number(input[index]);
        piecesCount += currentPieces;
        index++;
        if (piecesCount >= cakeSize) {
            break;
        }
    }
    if (piecesCount >= cakeSize) {
        console.log(`No more cake left! You need ${piecesCount - cakeSize} pieces more.`)
    }
    else {
        console.log(`${cakeSize - piecesCount} pieces are left.`);
    }
}