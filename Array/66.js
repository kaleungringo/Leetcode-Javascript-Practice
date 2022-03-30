//66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
//1. First attempt (Error if the Int larger than maximum 6145390195186705543)
// var plusOne = function(digits) {
//     let num = String((parseInt(digits.join('')) + 1));
//     return ([...num]);
// };

//2. Handling one by one
var plusOne = function(digits) {
    let flag = true;
    let i = digits.length - 1;
    while (flag) {
        if (digits[i] + 1 <= 9) {
            digits[i]++;
            flag = false;
        } else {
            if (digits[i] + 1 > 9) {
            digits[i] = 0;
            if (!(digits[i-1])) {
                digits.unshift(1);
                flag = false;
            } else {
                i--;
            }
        }
        }
    }
    return (digits);
};