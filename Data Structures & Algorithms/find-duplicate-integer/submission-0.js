class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let store = []

        for (let num of nums) {
            store[num] = (store[num] || 0) + 1

            if (store[num] > 1) {
                return num
            }
        }
    }
}
