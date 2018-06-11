function jediName (firstName, lastName) {
  const part1 = lastName.slice(0, 3);
  const part2 = firstName.slice(0, 2);
  const combo = part1 + part2;
  return combo;
}

console.log(jediName('Cecille', 'Salazar'));

function beyond (num) {
  if (num === Infinity || num === -Infinity) {
    console.log("And beyond");
  }
  if (num > 0 && num !== Infinity) {
    console.log("To infinity");
  }
  if (num < 0 && num !== -Infinity) {
    console.log("To negative infinity");
  }
  if (num === 0) {
    console.log("Staying home");
  }
}

beyond(-Infinity);