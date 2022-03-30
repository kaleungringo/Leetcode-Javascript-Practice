//1108. Defanging an IP Address
/**
 * @param {string} address
 * @return {string}
 */
//1. Spliting & Joining
var defangIPaddr = function(address) {
    return (address.split('.')).join("[.]");
};