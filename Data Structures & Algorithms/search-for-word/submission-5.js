class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function dfs(i, j, index) {
        if (index === word.length) return true; // found full word
        if (i < 0 || j < 0 || i >= rows || j >= cols) return false; // out of bounds
        if (visited[i][j] || board[i][j] !== word[index]) return false;

        visited[i][j] = true;

        const found = dfs(i - 1, j, index + 1) ||
                      dfs(i + 1, j, index + 1) ||
                      dfs(i, j - 1, index + 1) ||
                      dfs(i, j + 1, index + 1);

        visited[i][j] = false; // backtrack
        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;



    }

}
