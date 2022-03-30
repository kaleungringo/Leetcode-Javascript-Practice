//1688. Count of Matches in Tournament
/**
 * @param {number} n
 * @return {number}
 */
//1. Brute force
var numberOfMatches = function(n) {
    let temp = 0;
    while (n !== 1) {
        if (n % 2 == 1) {
            temp += (n - 1) / 2;
            n = (n - 1) / 2 + 1;
        } else {
            n = Math.floor(n/2);
            temp += n;
        }
    }
    return temp;
};

//2. Refactoring