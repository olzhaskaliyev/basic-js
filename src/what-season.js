const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined){
    return "Unable to determine the time of year!";
  }

  if(Object.prototype.toString.call(date) != "[object Date]"){
    throw new Error();
  }

  return ["winter", "spring", "summer", "autumn"][Math.floor((date.getMonth() + 1) % 12 / 3)];
};
