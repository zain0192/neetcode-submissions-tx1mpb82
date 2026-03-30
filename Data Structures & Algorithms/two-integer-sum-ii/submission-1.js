class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i=0;i<numbers.length;i++) {
            let secondNum = target - numbers[i];
            if(numbers.includes(secondNum)) {
                let secondIndex = numbers.indexOf(secondNum);
                return [i+1, secondIndex+1];
            }
        }
    }
}
