function numberPyramid(n) {
    let current = 1;
    let row = 1;

    while (current <= n) {
        let line = "";

        for (let i = 0; i < row; i++) {
            if (current > n) {
                break;
            }
            line += current + " ";
            current++;
        }

        console.log(line.trim());
        row++;
    }
}
