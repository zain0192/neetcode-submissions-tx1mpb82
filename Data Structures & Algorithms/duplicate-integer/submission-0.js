class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr = [];
        let flag = false;

        for (let i = 0; i < nums.length; i++) {
            if(arr.includes(nums[i])) {
                flag = true;
                break;
            } else {
                arr.push(nums[i]);
            }
        }

        return flag;
    }
}
