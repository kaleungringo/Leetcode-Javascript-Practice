//961. N-Repeated Element in Size 2N Array
/**
 * @param {number[]} nums
 * @return {number}
 */
//1. HashMap
var repeatedNTimes = function(nums) {
    let hashMap = {};
    let n = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]]++;
        } else {
            hashMap[nums[i]] = 1;
        }
        if (hashMap[nums[i]] == n) {
            return nums[i]
        }
    }
};

//2. RegEx