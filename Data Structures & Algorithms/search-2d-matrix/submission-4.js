class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let mLength = matrix.length;
        let arr = -1;
        for (let i = 0; i < mLength; i++) {
            let nums = matrix[i]
            if(target <= nums[nums.length - 1]) {
                arr = i
                break;
            }
        }

        if (arr === -1) {
            return false
        } else {
            if(matrix[arr].includes(target)) {
                return true
            } else {
                return false
            }
        }
    }
}
