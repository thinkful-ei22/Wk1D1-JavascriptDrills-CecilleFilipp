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

function decode (string) {
  const firstLetter = string.charAt(0);
  if (firstLetter === 'a') {
    return string.charAt(1);
  } else if (firstLetter === 'b') {
    return string.charAt(2);
  } else if (firstLetter === 'c') {
    return string.charAt(3);
  } else if (firstLetter === 'd') {
    return string.charAt(4);
  } else {
    return ' ';
  }
}

console.log(decode('craft') + decode('block') + decode('argon') + decode('meter') + decode('bells') + decode('brown') + decode('croon') + decode('droop'));


//'craft block argon meter bells brown croon droop'

function daysInMonth(month, leapYear) {
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return result = `${month} has 31 days.`;
      break;
    case 'February':
      if (leapYear === true) {
        return result = `${month} has 29 days.`;
      }
      if (leapYear === false) {
        return result = `${month} has 28 days.`;
      }
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return result = `${month} has 30 days.`;
      break;

    default:
      throw new Error('Must provide a valid month');
  }
}

console.log(daysInMonth('February', false));
