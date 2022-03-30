//575. Distribute Candies
/**
 * @param {number[]} candyType
 * @return {number}
 */
//1. Hash map
var distributeCandies = function(candyType) {
    let n = candyType.length / 2;
    let temp = 0;
    let hashMap = {};
    for (let i = 0; i < candyType.length; i++) {
        if (!hashMap.hasOwnProperty(candyType[i])) {
            hashMap[candyType[i]] = null;
            temp++;
            if (temp > n) {
                return n;
            }
        }
    }
    return temp;
};