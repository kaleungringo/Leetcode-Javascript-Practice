//476. Number Complement
/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    let str = num.toString(2);
    let comp = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "0") {
            comp.push("1");
        } else {
            comp.push("0");
        }  
    }
    return parseInt(comp.join(""), 2);
};