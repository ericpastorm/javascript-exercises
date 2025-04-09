const leapYears = function(year) {
    let lastDigits = "";
    if(year.toString().length > 2){
        lastDigits += year.toString().slice(year.toString().length-2);
    }
    if(lastDigits == "00"){
        if(year%400 == 0 && year%4 == 0) return true;
    } else {
        if(year%4 == 0) return true;
    }
    return false;
};
// Do not edit below this line
module.exports = leapYears;
