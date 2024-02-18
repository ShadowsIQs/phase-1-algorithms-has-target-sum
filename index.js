function hasTargetSum(array, target) {
  const sumNum = new Set()

  for (let num of array){
    const complement = target - num;
    if (sumNum.has(complement)){
      return true
    }
    sumNum.add(num);
  }
  return false
}

/* 
  O(n) runtime
*/

/* 
Define a function called hasTargetSum that takes an array of numbers and a sum as input.
using an empty set called sumNum.
we go through each number, num, in the input array
  (Calculate the complement of num with the target.
  Check if the complement exists in the sumNum
  If it does, return true, telling us that a pair with the target sum exists.
  add num to the sumNum.)
If the loop completes without finding a pair with the target sum, return false.

*/

/*
It keeps tracks of numbers in the array so far using a set called sumNum.
For each number in the array, it calculates its complement with the target.
If the complement exists in the set, it returns true. showing that a pair of numbers with the sum of the target has been found.
If the loop completes without finding a pair it returns false.
*/

// You can run `node index.js` to view these console logs
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
