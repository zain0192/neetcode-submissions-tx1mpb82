class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let window = []
        let res = []

        for (let i=0; i < nums.length; i++) {
            window.push(nums[i])
            if(window.length > k) {
                window.shift()
            }
            if (window.length === k) {
                res.push(Math.max(...window))
            }
        }

        return res
    }
}
