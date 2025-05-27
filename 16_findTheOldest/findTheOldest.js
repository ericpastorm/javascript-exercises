const findTheOldest = function(arr) {

    arr.sort(function compare(a, b){
        if(a.yearOfDeath == undefined){
            return (a.yearOfBirth - 2025) - (b.yearOfBirth - b.yearOfDeath);
        } else if(b.yearOfDeath == undefined){
            return (a.yearOfBirth - a.yearOfDeath) - (b.yearOfBirth - 2025);
        } else {
            return (a.yearOfBirth - a.yearOfDeath) - (b.yearOfBirth - b.yearOfDeath);
        }
    });
    return arr[0];

};
// Do not edit below this line
module.exports = findTheOldest;
