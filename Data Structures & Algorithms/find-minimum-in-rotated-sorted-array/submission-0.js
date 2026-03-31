class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let output = nums[0];
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[left] <= nums[right]) {
                output = Math.min(output, nums[left])
                break;
            }
            console.log(mid);
            output = Math.min(output, nums[mid])
            if(nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return output
    }
}
