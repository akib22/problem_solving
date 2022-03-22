/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let lastRow = [1]
    
    for(let i = 0; i < rowIndex + 1; i++) {
        let currentRow = []

        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                currentRow.push(1)
            } else {
                currentRow.push(lastRow[j - 1] + lastRow[j])
            }
        }
        
        lastRow = currentRow
    }
    
    return lastRow
};
