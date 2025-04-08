const repeatString = function(string, num) {
    let globstring = "";
    if(num < 0){
        globstring = "ERROR"
    } else {
        for (let i = 0; i < num; i++) {;
            globstring += string;
            }
    }
return globstring;
};

// Do not edit below this line
module.exports = repeatString;
