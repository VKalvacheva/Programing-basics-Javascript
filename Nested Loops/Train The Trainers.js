function trainTheTrainers(input) {
    let n = Number(input[0]);  
    let index = 1;
    let totalSum = 0;
    let totalCount = 0;

    while (input[index] !== "Finish") {
        let presentationName = input[index];
        index++;

        let sumGrades = 0;
        for (let i = 0; i < n; i++) {
            let grade = Number(input[index]);
            index++;
            sumGrades += grade;
        }

        let average = sumGrades / n;
        totalSum += sumGrades;
        totalCount += n;

        console.log(`${presentationName} - ${average.toFixed(2)}.`);
    }

    let finalAverage = totalSum / totalCount;
    console.log(`Student's final assessment is ${finalAverage.toFixed(2)}.`);
}
