// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  console.log(numbers);

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] > firstMax) {
      firstMax = numbers[i];
    } else if (numbers[i] > secondMax && numbers[i] < firstMax) {
      secondMax = numbers[i];
    }
  }
  let result = [firstMax, secondMax];
  console.log(result);
  return result;
};
