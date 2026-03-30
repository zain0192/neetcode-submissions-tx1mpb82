class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let output = []
        let length = nums.length;
        for (let i = 0; i < length; i++) {
            output[i] = nums[i]
            output[i + length] = nums[i]
        }

        return output
    }
}
