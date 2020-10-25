const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const out = arr.slice();
  const discard = Symbol("Discarded item");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < out.length - 1) {
          out[i + 1] = discard;
        }
        out[i] = discard;
        break;
      case '--discard-prev':
        if (i > 0) {
          out[i - 1] = discard;
        }
        out[i] = discard;
        break;
      case '--double-next':
        if (i < out.length - 1) {
          out[i] = out[i + 1];
        } else {
          out[i] = discard;
        }
        break;
      case '--double-prev':
        if (i > 0) {
          out[i] = out[i - 1];
        } else {
          out[i] = discard;
        }
    }
  }

  return out.filter(el => el !== discard);
};
