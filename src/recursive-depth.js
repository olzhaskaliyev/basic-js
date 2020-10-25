const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? (1 + Math.max(...arr.map(el => this.calculateDepth(el.length === 0 ? [1] : el)))) : 0;
  }
};
