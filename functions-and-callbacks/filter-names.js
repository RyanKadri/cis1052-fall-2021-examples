function filterNames(names) {
    let filteredList = [];

    for(const name of names) {
        if(!name.includes("Janice")) {
            filteredList.push(name)
        }
    }

    return filteredList;
}

filterNames(["Alice A", "Bob B", "Janice C", "Dave", "Janice"]);

// ["Alice A", "Bob B", "Dave" ]