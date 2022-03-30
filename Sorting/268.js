//268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
//1. Sorting
var missingNumber = function(nums) {
    let sNums = nums.sort(function(a, b) { return(a - b)});
    sNums.push("!"); //Handle miss last element
    for (let i = 0; i < sNums.length; i++) {
        if (sNums[i] !== i) {
            return i;
        }
    }
};