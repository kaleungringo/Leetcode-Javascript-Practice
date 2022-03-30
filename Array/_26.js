//26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
//Sequential access O(n)
var removeDuplicates = function(nums) {
    let u = [];
    let temp = null;
    let k = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     u.push('_');
    // }
    for (let i = 0; i < nums.length; i++) {
        if (temp !== nums[i]) {
            nums[k] = nums[i];
            temp = nums[i];
            k++;
        }
    }
    return k;
};