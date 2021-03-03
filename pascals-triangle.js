/**************** Pascal's Trianlge **************************/ 
/**  
Input: 5
Output:
[
    [1],
   [1,1],
  [1,2,1],
 [1,3,3,1],
[1,4,6,4,1]
]

1. pascalsTriangle ->
    declare an array of size(numRows)

2. generate row by row
    row[0] = 1
    row[row.length - 1] = 1

**/

var generate = function(numRows) {
  let pascalsTriangle = new Array(numRows); 

  // generate row by row
  for (let i=0; i<numRows; i++) {
      let row = new Array(i+1); // each row will have size + 1
      row[0] = 1; // first value will always equal 1
      row[row.length - 1] = 1; // last value will alwasy equal 1

      // generate valeus between 1 and 1
      for (let j=1; j<row.length -1; j++) { // start j at 1 b/c already have first index filled, end j at row.length -1, b/c already have last value of the row, this is to generate values between 1 and 1
          let rowAbove = pascalsTriangle[i-1]; // look at values from row above aka previous row 
          row[j] = rowAbove[j] + rowAbove[j-1]; // 
      }
      pascalsTriangle[i] = row; // after row is complete - added all the values needed, place row into pascals trianlge 
  }
  return pascalsTriangle;
}

console.log(generate(5));