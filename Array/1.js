//1. Two sum
//Brute force
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }
};

//Hashmap
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hashMap = {};
    for (let i=0; i < nums.length; i++) {
        hashMap[nums[i]] = [target - nums[i], i];
    }
    for (let i=0; i < nums.length; i++) {
        if ((hashMap.hasOwnProperty(hashMap[nums[i]][0])) && (i !== hashMap[hashMap[nums[i]][0]][1])) {
                return [i, hashMap[hashMap[nums[i]][0]][1]];
        }
    }
};