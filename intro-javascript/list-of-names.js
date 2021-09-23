function findLongestName(listOfNames) {
    let longestName = "";
    for(const currentName of listOfNames) {
        if(currentName.length > longestName.length) {
            longestName = currentName;
        }
    }

    return longestName;
}