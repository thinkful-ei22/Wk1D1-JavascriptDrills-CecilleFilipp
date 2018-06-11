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
    if (age === '') {
        throw new Error("Missing age")
    }
    if (name === '') {
        throw new Error("Missing name")
    }
}

try {
  whoAmI('Chris', -5);    // Will throw error and be caught below
  whoAmI('Chris');
  whoAmI('', -5)
} catch(e) {
  console.error(e.message);
}

whoAmI('', 8);
