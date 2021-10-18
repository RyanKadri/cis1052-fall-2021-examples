function filterLargeNumbers(listOfNumbers) {
    let filteredList = [];
    for(const num of listOfNumbers) {
        if(num <= 10) {
            filteredList.push(num);
        }
    }

    return filteredList;
}
