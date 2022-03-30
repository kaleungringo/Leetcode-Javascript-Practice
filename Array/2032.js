//2032. Two Out of Three
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
//1. HashMap
var twoOutOfThree = function(nums1, nums2, nums3) {
    let input = [nums1, nums2, nums3];
    let output = [];
    let hashMap = {};
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (hashMap.hasOwnProperty(input[i][j])) {
                if (hashMap[input[i][j]][i] !== 1) {
                    hashMap[input[i][j]][i]++;
                }
            } else {
                hashMap[input[i][j]] = [0,0,0];
                hashMap[input[i][j]][i]++;
            }
        }
    }
    for (const prop in hashMap) {
        if ((hashMap[prop][0] + hashMap[prop][1] + hashMap[prop][2]) > 1) {
            output.push(parseInt(prop));
        }
    }
    return output;
};