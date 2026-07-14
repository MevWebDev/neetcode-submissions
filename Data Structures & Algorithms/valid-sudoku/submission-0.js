class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        // checking rows
        for(let i = 0; i < board.length; i++){          
            const numbers = board[i].filter((n)=>n >= 0 || n<=9)       
            const set = new Set(numbers)
            if(set.size !== numbers.length) return false;           
        }
        // checking columns
        for(let i = 0; i < board.length; i++){
            const row = []
           for(let j = 0; j < board.length; j++){          
            row.push(board[j][i])
        }       
        const numbers = row.filter((n)=>n >= 0 || n<=9)       
        const set = new Set(numbers)
        if(set.size !== numbers.length) return false; 
        }
       // checking 3x3
       
       for (let square = 0; square < 9; square++){
        let seen = new Set()
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
            let row = Math.floor(square/3) * 3 + i
            let col = (square % 3) * 3 + j;
            if(board[row][col] === '.') continue;
            if (seen.has(board[row][col])) return false;
            seen.add(board[row][col])
        }
        }
        
       }
       
       
            return true
    }
}
