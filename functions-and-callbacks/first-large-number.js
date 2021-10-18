function findFirstLargeNumber(numbers) {
    for(const number of numbers) {
        if(number > 10) {
            return number;
        }
    }
}

findFirstLargeNumber([1,2,3,4,11,19])