class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = []
        let sol = []
        let level = nums.length

        function backtrack(l) {
            if (l === level) {
                res.push([...sol])
                return
            }

            backtrack(l+1)

            sol.push(nums[l])
            backtrack(l+1)
            sol.pop()
        }

        backtrack(0)
        return res
    }
}
