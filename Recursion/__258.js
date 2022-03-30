//258. Add Digits
/**
 * @param {number} num
 * @return {number}
 */
 function addDig(num) {
    let str = num.toString();
    num = 0;
    for (let i = 0; i < str.length; i++) {
        num += parseInt(str[i]);
    }
    if (num > 9) {
        addDig(num);
    } else {
        return num;
    }
};

var addDigits = function(num) {
    return addDig(num);
};);