class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                const val = board[i][j];

                if(val !== "."){
                    const rowKey = `r${i}-${val}`;
                    const colKey = `c${j}-${val}`;

                    const rowBox = Math.floor(i/3);
                    const colBox = Math.floor(j/3);
                    const boxKey = `b${rowBox}-${colBox}-${val}`;

                    if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)){
                        return false;
                    }

                    seen.add(rowKey);
                    seen.add(colKey);
                    seen.add(boxKey);
                }
            }
        }

        return true;
    }
}
