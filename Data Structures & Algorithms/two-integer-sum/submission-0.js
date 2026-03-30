class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let output = null

        nums.forEach( (num,i) => {
            let secondNum = target - num;
            let secondIndex = nums.findIndex(n => n === secondNum);
            if(secondIndex !== -1) {
                output = [i, secondIndex]
            }
        })

        return output;

    }
}
