const sumAll = function(num1,num2) {
    let res = 0
    if (!(Number.isInteger(num1) && Number.isInteger(num2))){
        return "ERROR"
    }
    if (!(num1>0 && num2>0)){
        return "ERROR"
    }
    if (num1>num2){
        let arb = num2
        num2 = num1
        num1 = arb
    }
    for (num1; num1<=num2;num1++){
        res += num1
    }
    return res

};

// Do not edit below this line
module.exports = sumAll;
