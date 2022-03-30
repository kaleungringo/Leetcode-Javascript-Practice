//541. Reverse String II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
//1. Brute Force, code no refactoring
var reverseStr = function(s, k) {
    let i = 0;
    let j = 0;
    let flag = true;
    let output = [];
    while (i < s.length) {
        if (j - i + 1 !== k) {
            j++;
        } else {
            if (flag == true) {
            for (let p = j; i <= p; p--) {
                output.push(s[p]);
            }
                flag = false;
            } else {
            for (let p = i; p <= j; p++) {
                output.push(s[p]);
            }
                flag = true;
            }
            i = j + 1;
        }
    }
    return output.join("");
};