const reverseString = function(string) {
    let arr = string.split('')
    let reversed = [...arr].reverse()
    return reversed.join('')

};

// Do not edit below this line
module.exports = reverseString;
