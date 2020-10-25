module.exports = function countCats(matrix) {
  return matrix.flat().filter((t) => t === "^^").length;
};
