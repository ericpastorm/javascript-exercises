const palindromes = function (str) {
    str = String(str.toLowerCase()).trim().replace(/[^a-zA-Z0-9]/g, '');
    let stReverse = str.split('').reverse().join('');
    return stReverse == str;
};
// Do not edit below this line
module.exports = palindromes;
