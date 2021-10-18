function findFirstSName(names) {
    for(const name of names) {
        if(name[0] === "S") {
            return name;
        }
    }
}

findFirstSName(["Alice", "Bob", "Sam", "Charlie"])