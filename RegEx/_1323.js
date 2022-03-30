//1323. Maximum 69 Number
/**
 * @param {number} num
 * @return {number}
 */
// var maximum69Number  = function(num) {
//     let dec = Math.floor(Math.log(num) / Math.log(10));
//     console.log(dec)
//     for (let i = dec; i >= 0; i--) {
//         if (num % (6 * (10 ** i)) == 0) {
//             return (num + (3 * (10 ** i)));
//         }
//     }
//     return num;
// };
//2. RegEx
var maximum69Number  = function(num) {
    let str = num.toString();
    return (str.replace(/6/, "9"));
};