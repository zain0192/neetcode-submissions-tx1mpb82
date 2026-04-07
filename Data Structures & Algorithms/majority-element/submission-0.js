class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let length = nums.length
        let half = length / 2

        let count = []

        for (let i = 0; i < length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1
            if (count[nums[i]] >= half) {
                return nums[i]
            }
        }
    }
}
