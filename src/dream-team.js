const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false;
  }

  return members.filter(s => typeof s === "string").map(s => s.trim().slice(0, 1).toUpperCase()).sort().join('');
};
