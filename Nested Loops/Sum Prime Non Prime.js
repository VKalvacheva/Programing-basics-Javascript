function sumPrimeNonPrime(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;

    
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        let sqrt = Math.sqrt(num);
        for (let i = 3; i <= sqrt; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let line of input) {
        if (line === "stop") {
            break;
        }

        let num = Number(line);

        if (num < 0) {
            console.log("Number is negative.");
            continue;
        }

        if (isPrime(num)) {
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
