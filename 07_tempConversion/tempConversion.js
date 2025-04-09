const convertToCelsius = function(fah) {
  return Math.round(((fah-32)*(5/9)) * 10) / 10;
};

const convertToFahrenheit = function(cels) {
  return Math.round((cels*9/5+32) * 10) / 10;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
