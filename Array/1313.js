//1313. Decompress Run-Length Encoded List
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i += 2) {
        for (let j = 1; j <= nums[i]; j++) {
            output.push(nums[i+1]);
        }
    }
    return output;
};