module.exports = function towelSort (matrix) {
  let matrixResult = []
  if (matrix === undefined) {return matrixResult}
  if (matrix.length < 1) {return matrixResult}
  for (i = 0; i<=matrix.length-1; i++) {
    if(i % 2 != 0) {
      matrix[i] = matrix[i].reverse()
    }
    matrixResult = matrixResult.concat(matrix[i])
  }
  return matrixResult
}
