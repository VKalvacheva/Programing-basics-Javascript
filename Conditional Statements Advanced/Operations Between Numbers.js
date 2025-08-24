function operationToDo(number1, number2, action) {
    number1= Number(number1);
    number2 = Number(number2);
    let result = 0;
    let isEvenOrOdd;

    if(action == "+") {
        result = number1 + number2;
        if(result % 2 == 0) {
            isEvenOrOdd = "even";
        }
        else {
            isEvenOrOdd = "odd";
        }
        console.log(`${number1} ${action} ${number2} = ${result} - ${isEvenOrOdd}`);
    }
    else if(action == "-") {
        result = number1 - number2;
        if(result % 2 == 0) {
            isEvenOrOdd = "even";
        }
        else {
            isEvenOrOdd = "odd";
        }
        console.log(`${number1} ${action} ${number2} = ${result} - ${isEvenOrOdd}`);
    }
    else if(action == "*") {
        result = number1 * number2;
        if(result % 2 == 0) {
            isEvenOrOdd = "even";
        }
        else {
            isEvenOrOdd = "odd";
        }
        console.log(`${number1} ${action} ${number2} = ${result} - ${isEvenOrOdd}`);
    }
    else if(action == "/") {
        result = number1 / number2;
        if(number2 == 0){
            console.log(`Cannot divide ${number1} by zero`);
        }
        else {
            console.log(`${number1} ${action} ${number2} = ${result.toFixed(2)}`);
        }
    }
    else if(action == "%") {
        result = number1 % number2;
        if(number2 == 0){
            console.log(`Cannot divide ${number1} by zero`);
        }
        else {
            console.log(`${number1} ${action} ${number2} = ${result}`);
        }
    }
}