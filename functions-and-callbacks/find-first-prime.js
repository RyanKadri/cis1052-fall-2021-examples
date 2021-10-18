function findFirstPrimeNumber(numbers) {
    for(const number of numbers) {
        if(isPrime(number)) {
            return number;
        }
    }
}

function isPrime(number) {
    // Magically tell us if a number is prime;
}

findFirstPrimeNumber([1,2,3,4,11,19])