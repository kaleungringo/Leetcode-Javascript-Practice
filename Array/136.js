//136. Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashMap = {}
    for (let n=0; n<nums.length; n++) {
        if (hashMap.hasOwnProperty(nums[n])) {
            hashMap[nums[n]]++;
        } else {
            hashMap[nums[n]] = 1;
        }
    }
    for (const prop in hashMap) {
           if (hashMap[prop] == 1) {
               return prop;
           }
    }
};