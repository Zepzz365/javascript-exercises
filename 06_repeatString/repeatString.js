const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR"
    }
    let res = ""
    for (let i=1; i <= num; i++ ){
        res += string
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
