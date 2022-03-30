//190. Reverse Bits
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
//1. O(n)
var reverseBits = function(n) {
    let str = n.toString(2);
    let output = 0;
    if (str.length !== 32) {
        str = "0".repeat(32 - str.length).concat(str)
    }
    for (let i = 0; i < str.length; i++) {
        output += str[i] * ( 2 ** i );
    }
    return output;
};