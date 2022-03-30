//1365. How Many Numbers Are Smaller Than the Current Number
//1. Brute force
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let temp = 0;
    let output = [];
    for (let n = 0; n<nums.length; n++) {
        temp = 0;
        for (let i = 0; i<nums.length; i++) {
            if (nums[i] < nums[n]) {
                temp++;
            }
        }
        output.push(temp);
    }
    return output;
};

//2. Hashmap
//3. Sorting
