//485. Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
//1. Traverse
var findMaxConsecutiveOnes = function(nums) {
    let temp = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            temp++
        } else {
            temp = 0;
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};