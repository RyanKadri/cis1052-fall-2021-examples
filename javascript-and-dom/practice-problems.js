// Write a function that takes in an array and returns a new array with each item doubled

function doubleArray(array) {
    const doubledArray = [];

    for(const element of array) {
        doubledArray.push(element * 2);
    }

    return doubledArray;
}

// Write a function that finds the object with the first name, alphabetically

findFirstNameAlphabetically([
    { name: "Bob", age: 25 },
    { name: "Alice", age: 42 },
    { name: "Joe", age: 30 }
])

function findFirstNameAlphabetically(people) {
    if(people.length === 0) {
        return null;
    }

    let firstPerson = people[0];

    for(const person of people) {
        if(person.name < firstPerson.name) {
            firstPerson = person;
        }
    }
    
    return firstPerson;

}