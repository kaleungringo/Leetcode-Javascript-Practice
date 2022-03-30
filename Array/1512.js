//1512. Number of Good Pairs
//1. Brute force
/**
 * @param {number[]} nums
 * @return {number}
 */
// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     for (let i=0; i < nums.length - 1; i++) {
//         for (let j=nums.length - 1; j > i; j--) {
//             if (nums[i] == nums[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

//2. HashMap
var numIdenticalPairs = function(nums) {
    let hashMap = {};
    let pair = 0;
    for (let i=0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]].count += hashMap[nums[i]].length;
            hashMap[nums[i]].push(i);
        } else {
            hashMap[nums[i]] = [i];
            hashMap[nums[i]].count = 0;
        }
    }
    for (const prop in hashMap) {
        pair += hashMap[prop].count;
    }
    return pair;
};