function filterEvens(numbers) {
    let filteredList = [];

    for(const number of numbers) {
        if(number % 2 === 1) {
            filteredList.push(number)
        }
    }

    return filteredList;
}

filterEvens([1,2,3,4])
// [1,3]