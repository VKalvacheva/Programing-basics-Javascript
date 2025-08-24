function specialNumbers(N) {
    let result = [];

    for (let num = 1111; num <= 9999; num++) {
        let numStr = num.toString();
        let isSpecial = true;

        for (let i = 0; i < 4; i++) {
            let digit = Number(numStr[i]);
            
            if (digit === 0 || N % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result.push(num);
        }
    }

    console.log(result.join(' '));
}
