class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length === 0) {
            return 0
        }

        let sorted = [... new Set(nums.sort((a,b) => a - b))];
        let length = nums.length;
        let counter = 1;
        let max = 0;

        for (let i = 0; i < length; i++) {
            if(i !== length - 1) {
                if(sorted[i] + 1 === sorted[i + 1]) {
                    counter++;
                } else if (sorted[i] < sorted[i + 1]) {
                    counter = 1;
                }
            }

            max = Math.max(counter, max);
        }

        return max;

    }
}
