function hasTargetSum(array, target) {
 // Approach:
// 1. Iterate through each element in the array.
// 2. For each element, explore other elements in the array to find a pair
//    whose sum matches the target.
// 3. If a pair with the target sum is found, return true.
// 4. If no such pair is found after exploring all combinations, return false.

  // Implementation:
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no matching pair is found, return false.
  return false;
}


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
