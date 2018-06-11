function yearOfBirth(age) {
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
}

function whoAmI(name, age) {
    const yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and Im ${age} years old`);
    console.log(`I was born in ${yob}`);
}

whoAmI('Cecille', 26);
