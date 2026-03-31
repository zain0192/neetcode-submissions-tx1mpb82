class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let output = []

        for (let i = 0; i < temperatures.length; i++) {
            for (let j = i+1; j<temperatures.length; j++) {
                if(temperatures[i] < temperatures[j]) {
                    output.push(j-i)
                    break;
                }

                if(j === temperatures.length - 1) {
                    output.push(0)
                }
            }

            if(i === temperatures.length - 1) {
                output.push(0)
            }
        }

        return output
    }
}
