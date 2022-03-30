//169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let n = nums.length / 2;
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]]++;
        } else {
            hashMap[nums[i]] = 1;
        }
        if (hashMap[nums[i]] >= n) {
            return nums[i];
        }
    }
};