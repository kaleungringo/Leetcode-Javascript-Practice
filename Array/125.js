//125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^A-Z0-9]/ig, "").split("");
    for (let n = 0; n < str.length / 2; n++) {
        if (str[n] !== str[str.length - n - 1]) {
            return false;
        }
    }
    return true;
};