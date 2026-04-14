class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let count = 0;
        let area = 0;

        function checkIsland(row, col) {
            if(grid[row] && grid[row][col] === 1) {
                count++
                grid[row][col] = 0
                checkIsland(row + 1, col)
                checkIsland(row - 1, col)
                checkIsland(row, col + 1)
                checkIsland(row, col - 1)
            }
        }

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) {
                    checkIsland(r,c)
                    area = Math.max(area,count)
                    count = 0
                }
            }
        }

        return area
    }
}
