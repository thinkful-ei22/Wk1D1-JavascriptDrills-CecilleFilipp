function yearOfBirth(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
}

function whoAmI(name, age) {
    const yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and Im ${age} years old`);
    console.log(`I was born in ${yob}`);
}

whoAmI('Cris', -5);
