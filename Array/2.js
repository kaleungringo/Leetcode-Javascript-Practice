//2. Palindrome Checker
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString();
    for (let n=0; n < (str.length / 2); n++) {
        if (str[n] !== str[str.length - n - 1]) {
            return false;
        }
    }
    return true;
};

//Less optimized
//String functiton approach
var isPalindrome = function(x) {
    const inverted = x.toString().split("").reverse().join("");
    return inverted == x;
}

