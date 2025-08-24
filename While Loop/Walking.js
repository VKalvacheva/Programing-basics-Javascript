function walking(input) {
    let goal = 10000;
    let totalSteps = 0;
    let index = 0;

    while (index < input.length) {
        let current = input[index];

        if (current === "Going home") {
            index++;
            let goingHomeSteps = Number(input[index]);
            totalSteps += goingHomeSteps;
            break; 
        }

        totalSteps += Number(current);

        if (totalSteps >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goal} steps over the goal!`);
            return;
        }

        index++;
    }

    
    if (totalSteps < goal) {
        console.log(`${goal - totalSteps} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - goal} steps over the goal!`);
    }
}
