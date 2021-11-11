const firstNameField = document.getElementById("firstName");
const firstNameFeedback = document.getElementById("firstNameFeedback");

function isValidAge(age) {
    if(age < 13 || age > 118) {
        return false;
    } else {
        return true;
    }
}

function isNameValid(name) {
    const firstLetter = name[0];
    if(firstLetter.toUpperCase() !== firstLetter) {
        return false;
    }

    for(let i = 1; i < name.length; i++) {
        const currentLetter = name[i];
        if(currentLetter.toUpperCase() === currentLetter) {
            return false;
        }
    }

    if(name.includes(" ")) {
        return false;
    }

    return true;
}

function validateFirstName() {
    if(isNameValid(firstNameField.value)) {
        firstNameFeedback.innerText = "";
    } else {
        firstNameFeedback.innerText = "Invalid First Name";
    }
}