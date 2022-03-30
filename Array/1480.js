//1480. Running Sum of 1d Array
//1. Brute force
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let n = 1; n < nums.length; n++) {
        nums[n] += nums[n - 1];
    }
    return nums;
};