// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.match(/[a-zA-Z0-9]/)) {
      count[char] = (count[char] || 0) + 1;
    }
  }

  let maxChar = "";
  let maxCount = 0;

  const keys = Object.keys(count);
  for (let i = 0; i < keys.length; i++) {
    const char = keys[i];
    const countText = count[char];

    if (countText > maxCount) {
      maxChar = char;
      maxCount = countText;
    }
  }
  return maxChar;
};

let result1 = getMaxCharacters("abcccccccd") === "c";
let result2 = getMaxCharacters("apple 1231111") === "1";

console.log(result1);
console.log(result2);
