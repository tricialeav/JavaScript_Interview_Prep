/* Given N number of rows, solve for Pascal's Triangle
Pascals triangle: 
    Row 0        1
    Row 1       1 1
    Row 2      1 2 1
    Row 3     1 3 3 1 
    Row 4    1 4 6 4 1
    Row 5  1 5 10 10 5 1 */

const pascalsTriangle = (num) => {
    let pascalArray = [[1], [1, 1]];
    let prevRow = pascalArray[1];
    let nextRow = [];
    for (let i = 2; i < num; i++) {
        nextRow.push(1);
        for (let j = 0; j < prevRow.length; j++) {
            if (!isNaN(prevRow[j + 1])) {
                nextRow.push(prevRow[j] + prevRow[j + 1]);
            }
        }
        nextRow.push(1);
        prevRow = nextRow;
        pascalArray.push(nextRow);
        nextRow = [];
    }
    return pascalArray;
}