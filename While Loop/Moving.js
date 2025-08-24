function solve(input) {
    let index = 3;
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let target = width * length * height;
    let boxesAreaCount = 0;

    while (input[index] !== "Done") {
        input[index] = Number(input[index]);
        boxesAreaCount += input[index];
        index++;
        if (boxesAreaCount > target) {
            break;
        }
    }
    if (boxesAreaCount < target) {
        console.log(`${target - boxesAreaCount} Cubic meters left.`);
    }
    else {
        console.log(`No more free space! You need ${boxesAreaCount - target} Cubic meters more.`);
    }
}