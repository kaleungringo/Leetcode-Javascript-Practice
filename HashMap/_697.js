//697. Degree of an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
//1. HashMap
var findShortestSubArray = function(nums) {
    let hashMap = {};
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]].push(i);
        } else {
            hashMap[nums[i]] = [];
            hashMap[nums[i]].push(i);
        }
        if (hashMap[nums[i]].length > length) {
            length = hashMap[nums[i]].length;   
        }
    }
    let min = Infinity;
    for (const prop in hashMap) {
        if (hashMap[prop].length == length) {
            if (hashMap[prop][hashMap[prop].length - 1] - hashMap[prop][0] + 1 < min) {
                min = hashMap[prop][hashMap[prop].length - 1] - hashMap[prop][0] + 1;
            }
        }
    }
    return min;
};