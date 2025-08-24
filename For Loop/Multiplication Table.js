function multiplicationTable(input) {
    input = Number(input);

    for(let i = 1; i <= 10; i++) {
        let result = i * input;
        console.log(`${i} * ${input} = ${result}`);
    }
}