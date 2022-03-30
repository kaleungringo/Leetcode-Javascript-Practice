//2119. A Number After a Double Reversal
/**
 * @param {number} num
 * @return {boolean}
 */
//1. Reverse string and compare length
// var isSameAfterReversals = function(num) {
//     let str = num.toString();
//     let reverseNum1 = parseInt(str.split('').reverse().join(''));
//     let len1 = (reverseNum1.toString()).length;
//     return len1 == str.length;
// };

//2. Assess the digit of num
// var isSameAfterReversals = function(num) {
//     let str = num.toString();
//     if (str.length ==1) {
//         return true;
//     }
//     if (str[str.length - 1] == 0) {
//         return false;
//     } else {
//         return true;
//     }
// };

//3. Remainder approach (false if last digit is 0)
// var isSameAfterReversals = function(num) {
//     if (num % 10 !== 0 || num < 10) {
//         return true
//     }
//     return false;
// };

//3. Refactor (one line solution)
var isSameAfterReversals = function(num) {
    return (num % 10 !== 0 || num < 10 );
};