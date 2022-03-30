//219. Contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//1. Brute force
// var containsNearbyDuplicate = function(nums, k) {
//     let hashMap = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (hashMap.hasOwnProperty(nums[i])) {
//             hashMap[nums[i]].push(i);
            
//         } else {
//             hashMap[nums[i]] = [];
//             hashMap[nums[i]].push(i);
//         }
//     }
//     console.log(hashMap)
//     for (const prop in hashMap) {
//         if (hashMap[prop].length > 1) {
//         for (let i = 0; i < hashMap[prop].length; i++) {
//             if (hashMap[prop][i+1] - hashMap[prop][i] <= k) {
//                 return true;
//             }
//         }
//         }
//     }
//     return false;
// };

//2. Refactoring
var containsNearbyDuplicate = function(nums, k) {
    let hashMap = {};
    let l = 0;
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            l = hashMap[nums[i]].length;
            if (i - hashMap[nums[i]][l - 1] <= k) {
                return true;
            }
            hashMap[nums[i]].push(i);            
        } else {
            hashMap[nums[i]] = [];
            hashMap[nums[i]].push(i);
        }
    }
    return false;
};

//3. Nested loop
// var containsNearbyDuplicate = function(nums, k) {
//   for (let i = 0; i < nums.length - 1; i++) {
//       for (let j = k; j > 0; j--) {
//           if (nums[i] == nums[i + j]) {
//               return true;
//           }
//       }
//   }
// return false;
// };