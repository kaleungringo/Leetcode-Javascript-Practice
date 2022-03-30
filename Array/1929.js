//1929. Concatenation of Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    nums.push(...nums);
    return nums
};