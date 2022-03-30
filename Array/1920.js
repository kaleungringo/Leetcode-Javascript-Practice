//1920. Build Array from Permutation
//For loop method
var buildArray = function(nums) {
    let temp = [];
    for (let n = 0; n < nums.length; n++) {
        temp.push(nums[nums[n]]);
    }
    return temp;
};