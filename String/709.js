//709. To Lower Case
/**
 * @param {string} s
 * @return {string}
 */
//1. ASCII Table
var toLowerCase = function(s) {
    let temp = [];
    let chr = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) <= 90 && s.charCodeAt(i) >= 65) {
            temp.push(String.fromCharCode(s.charCodeAt(i) + 32));
        } else {
            temp.push(s[i]);
        }
    }
    return temp.join("");
};