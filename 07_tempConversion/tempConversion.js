const convertToCelsius = function(fahrenheit) {
  let result =  parseFloat(((fahrenheit - 32) * (5/9)).toFixed(1));
  if(result == 0) return 0;
  return result;
};

const convertToFahrenheit = function(temp) {
  return parseFloat((9/5*temp + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
