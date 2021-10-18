function filterEvens(numbers) {
    let filteredList = [];

    for(const number of numbers) {
        if(!isPrime(number)) {
            filteredList.push(number)
        }
    }

    return filteredList;
}

filterEvens([2,4,8,7,11])
// [2,7,11]