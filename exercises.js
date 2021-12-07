// Exercise 1
// The below function does not work. The variable twoPlusTwo gets set to
// undefined. Refactor the function to make it work.

function addNumbers(numberA, numberB) {
  console.log(numberA + numberB);
  return (numberA + numberB);
}

const twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo); // 4

// Exercise 2
// Write a function called yell that logs out an uppercase version of a string.
function yell (stringA) {
  return stringA.toUpperCase();
}

console.log(yell("fun "));

// Write a function called yell10 that uses your yell function to log out an
// uppercase version of a string 10 times.
function yell10 (stringB) {
  var results;
  for(var i = 0; i < 10; i++) {
    results = yell(stringB) + " - run " + (i + 1);
    console.log(results);
  }
}
 yell10("upward ");

// Exercise 3
// Write a function called longest that returns the longest of two input strings
// or arrays.
function longest (stringA, stringB) {
  lenA = stringA.length;
  lenB = stringB.length;
  if (lenA > lenB) {
    console.log(`${stringA}` + " is longer than " + `${stringB}` + ".");
    return;
  } else if (lenB > lenA) {
    console.log(`${stringB}` + " is longer than " + `${stringA}` + ".");
    return;
  } else {
    console.log("Both strings, " + `${stringA}` + " and " + `${stringB}` + ", are the same length.");
    return;
  }
}

longest("Function", "Method");
longest("Parameter", "Argument");
longest("Push", "Pull");

// Exercise 4
// Write a function called isVowel that takes a character (i.e. a string of
// length 1) and returns true if it is a vowel, uppercase or lowercase. The
// function should return false if the character is not a vowel.

function isVowel (letter) {
  newLetter = letter.toUpperCase();
  var results = ['A', 'E', 'I', 'O', 'U'].indexOf(newLetter) !== -1;
  if (newLetter === 'Y') {
    return "The letter " + `${newLetter}` + " is sometimes a vowel."
  }
  if (results === true) {
    return "The letter " + `${newLetter}` + " is a vowel.";
  } else {
    return "The letter " + `${newLetter}` + " is not a vowel.";
  }
}

console.log(isVowel('a'));
console.log(isVowel('b'));
console.log(isVowel('E'));
console.log(isVowel('H'));
console.log(isVowel('y'));
