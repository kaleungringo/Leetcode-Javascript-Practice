//448. Find All Numbers Disappeared in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//1. HashMap O(n)
var findDisappearedNumbers = function(nums) {
    let hashMap = {};
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] = 1;
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!hashMap.hasOwnProperty(i)) {
            output.push(i);
        }
    }
    return output;
};