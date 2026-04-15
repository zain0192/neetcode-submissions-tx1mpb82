class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let length = (nums1.length + nums2.length)
        let arr = []
        let l = 0
        let r = 0

        while (arr.length <= (length / 2)) {
            if (nums2[r] === undefined) {
                arr.push(nums1[l])
                l++
            } else if (nums1[l] === undefined) {
                arr.push(nums2[r])
                r++ 
            } else {
                if (nums1[l] <= nums2[r]) {
                    arr.push(nums1[l])
                    l++
                } else {
                    arr.push(nums2[r])
                    r++
                }
            }
        }

        if (length % 2 === 0) {
            return ((arr[arr.length - 1] + arr[arr.length - 2]) / 2)
        } else {
            return arr[arr.length - 1]
        }
    }
}
