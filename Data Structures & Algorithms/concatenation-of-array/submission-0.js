class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let output = []
        for (let i = 0; i < nums.length; i++) {
            output[i] = nums[i]
            output[i + nums.length] = nums[i]
        }

        return output
    }
}
