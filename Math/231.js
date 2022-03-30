//231. Power of Two
/**
 * @param {number} n
 * @return {boolean}
 */
//1. Log
var isPowerOfTwo = function(n) {
    let p = Math.log(n) / Math.log(2);
    if (2 ** Math.floor(p) == n && n > 0) {
            return true;
    } else {
        return false;
    }
};