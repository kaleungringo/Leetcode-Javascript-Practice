//2011. Final Value of Variable After Performing Operations
//1. Brute force
/**
 * @param {string[]} operations
 * @return {number}
 */
// var finalValueAfterOperations = function(operations) {
//     let str = operations.join('');
//     let x=0;
//     let n=0;
//     while (str[n]) {
//         if (str[n] === 'X') {
//             n += 1;
//         }
//         if (str[n] === '-' && str[n+1] === '-') {
//             x -= 1;
//             n += 2;
//         } else if (str[n] === '+' && str[n+1] === '+') {
//             x += 1;
//             n += 2;
//         }    
//     }

//     return x;
// };

//2. Counting the numsbers of '--' and '++' by RegEx
var finalValueAfterOperations = function(operations) {
    let str = operations.join('');
    let x=0;
    x += (str.match(/[+]/g) || []).length / 2;
    x -= (str.match(/[-]/g) || []).length / 2;
    return x;
};
