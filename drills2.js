'use strict';

//Jedi name

function jediName (firstName, lastName) {
  const part1 = lastName.slice(0, 3);
  const part2 = firstName.slice(0, 2);
  const combo = part1 + part2;
  return combo;
}

console.log(jediName('Cecille', 'Salazar'));

//To infinity...

function beyond (num) {
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  }
  if (num > 0 && num !== Infinity) {
    console.log('To infinity');
  }
  if (num < 0 && num !== -Infinity) {
    console.log('To negative infinity');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}

beyond(-Infinity);

//cracking the code

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


//days in a month

function daysInMonth(month, leapYear) {
  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days.`;
  case 'February':
    if (leapYear === true) {
      return `${month} has 29 days.`;
    }
    if (leapYear === false) {
      return `${month} has 28 days.`;
    }
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days.`;
  default:
    throw new Error('Must provide a valid month');
  }
}

console.log(daysInMonth('December', false));


// rock papers scissors

function game(num) {
  const computer = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    if (computer === 1) {
      return 'Its a tie!';
    }
    if (computer === 2) {
      return 'Rock loses to paper, you lose!';
    }
    if (computer === 3) {
      return 'Rock beats scissors, you win!';
    }
  }
  if (num === 2) {
    if (computer === 1) {
      return 'Paper beats rock, you win!';
    }
    if (computer === 2) {
      return 'Its a tie!';
    }
    if (computer === 3) {
      return 'Paper loses to scissors, you lose!';
    }
  }
  if (num === 3) {
    if (computer === 1) {
      return 'Scissors loses to Rock, you lose!';
    }
    if (computer === 2) {
      return 'Scissors beat paper, you win!';
    }
    if (computer === 3) {
      return 'Its a tie!';
    }
  }
  else {
    throw new Error('Choose between 1 and 3 only.');
  }
}

console.log(game(1));