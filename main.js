function sumEvenFibonacci(limit) {
    let sum = 0;
    let fib1 = 1;
    let fib2 = 2;

    while (fib2 <= limit) {
        if (fib2 % 2 === 0) {
            sum += fib2;
        }

        // generate the next Fibonacci number
        let temp = fib1 + fib2;
        fib1 = fib2;
        fib2 = temp;
    }

    return sum;
}

// find the sum of even Fibonacci numbers below four million
const result = sumEvenFibonacci(4000000);
console.log(result)

