function findFirstLongName(names) {
    for(const name of names) {
        if(name.length > 7) {
            return name;
        }
    }
}

findFirstLongName(["Alice", "Bob", "Charlie", "Voldemort", "Dave"])

function sumOfNameLengths(names) {
    let totalLength = 0;

    for(const name of names) {
        totalLength += name.length;
    }

    return totalLength;
}

sumOfNameLengths(["Alice", "Bob", "Charlie", "Voldemort", "Dave"]);

/* Total Length: 24

Alice - 5
Bob - 3
Charlie - 7
Voldemort - 9*/