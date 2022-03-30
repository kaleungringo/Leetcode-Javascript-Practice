//1431. Kids With the Greatest Number of Candies
//1. HashMap
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let hashMap = {};
    let output = [];
    let greatest = 0;
    for (const element in candies) {
        hashMap[candies[element]] = parseInt(candies[element]) + extraCandies;
        if (greatest < candies[element]) {
             greatest = candies[element];
        }
    }
    for (const element in candies) {
        if (hashMap[candies[element]] >= greatest) {
            output.push(true);
        } else {
            output.push(false);
        }
    }
    return output;
};