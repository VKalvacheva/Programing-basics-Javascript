function examPrep(input) {
    let index = 0;
    let maxLowGrades = Number(input[index++]);
    let lowGradesCount = 0;
    let gradesSum = 0;
    let taskCount = 0;
    let lastTask = undefined;
    let currentTask = input[index++];
    
    while (currentTask !== "Enough") {
        let currentGrade = Number(input[index++]);

        if (currentGrade <= 4) {
            lowGradesCount++;
            if (lowGradesCount === maxLowGrades) {
                break;
            }
        }
        gradesSum += currentGrade;
        taskCount++;
        lastTask = currentTask;

        currentTask = input[index++];
    }
    if (lowGradesCount === maxLowGrades) {
        console.log(`You need a break, ${maxLowGrades} poor grades.`);
    }
    else {
        console.log(`Average score: ${(gradesSum / taskCount).toFixed(2)}`);
        console.log(`Number of problems: ${taskCount}`);
        console.log(`Last problem: ${lastTask}`);
    }
}