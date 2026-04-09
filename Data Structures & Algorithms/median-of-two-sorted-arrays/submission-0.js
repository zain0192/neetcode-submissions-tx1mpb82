class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let arr = nums1.concat(nums2)
        arr.sort((a,b) => a - b)

        let half = Math.floor(arr.length / 2)
        if(arr.length % 2 !== 0) {
            return arr[half]
        } else {
            return ((arr[half - 1] + arr[half]) / 2)
        }
    }
}
