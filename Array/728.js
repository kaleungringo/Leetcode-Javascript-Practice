//728. Self Dividing Numbers
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function isSelfDiv(num) {
    let arr = num.toString();
    for (let n = 0; n < arr.length; n++)
        if (arr[n] !== 0) {
            if ( num % arr[n] !== 0) {
                return false;
            }
        }
    return true;
}

var selfDividingNumbers = function(left, right) {
    let output = [];
    for (let n = left; n <= right; n++) {
        if (isSelfDiv(n)) {
            output.push(n);
        }
    }
    return output;
};