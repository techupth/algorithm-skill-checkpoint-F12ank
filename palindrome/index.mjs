// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  let lowerNewText = str.toLowerCase();
  console.log(lowerNewText);
  let setString = lowerNewText.replace(/\s|:|,/g, "");
  console.log(setString);
  let word = setString.split("");
  console.log(word);
  let reverseText = word.reverse();
  console.log(reverseText);
  let joinText = reverseText.join("");
  console.log(joinText);

  if (setString === joinText) {
    return true;
  }
};

let result1 = palindrome("abba") === true;
let result2 = palindrome("abcdefg") === false;

console.log(result1);
console.log(result2);
