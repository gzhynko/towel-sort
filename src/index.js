module.exports = function towelSort (matrix) {
  var matrix = (matrix == undefined) ? [] : matrix;

  var newArray = [];

  for (let i = 0; i < matrix.length; i++) {
    if(i % 2 == 0){ 
      matrix[i].sort((f, s) => f - s);
    } else {
      matrix[i].sort((f, s) => s - f);
    }
    
    matrix[i].forEach((v, i) => { newArray.push(v) });
  }

  return newArray;
}
