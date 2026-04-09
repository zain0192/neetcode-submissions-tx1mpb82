class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MaxPriorityQueue()
        let res

        for (let n of nums) {
            maxHeap.enqueue(n)
        }

        for (let i = 1; i <= k; i++) {
            res = maxHeap.dequeue()
        }

        return res
    }
}
