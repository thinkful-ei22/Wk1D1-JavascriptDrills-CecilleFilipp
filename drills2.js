function jediName (firstName, lastName) {
  const part1 = lastName.slice(0, 3);
  const part2 = firstName.slice(0, 2);
  const combo = part1 + part2;
  return combo;
}

console.log(jediName('Cecille', 'Salazar'));
