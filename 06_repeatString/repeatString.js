const repeatString = function(string, num) {
    let globstring = "";
    if(num < 0){
        globstring = "ERROR"
    } else {
        for (let i = 0; i < num; i++) {;
            globstring += string;
            }
    }
console.log(globstring);
return globstring;
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
