function equalEvenOddSums(start, end) {
    let result = [];

    for (let num = start; num <= end; num++) {
        let numStr = num.toString();

        let evenSum = 0;
        let oddSum = 0;

        

        for (let i = 0; i < numStr.length; i++) {
            let digit = Number(numStr[i]);
            if (i % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }

        if (evenSum === oddSum) {
            result.push(num);
        }
    }

    if (result.length > 0) {
        console.log(result.join(" "));
    }
}
