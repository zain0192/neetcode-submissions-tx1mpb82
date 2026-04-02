class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = [];

        for(let str of strs) {
            let sorted = str.split("").sort().join("")
            if(output[sorted]) {
                output[sorted].push(str)
            } else {
                output[sorted] = [str]
            }
        }
        let res = []
        for (let key in output) {
            res.push(output[key])
        }
        return res
    }
}
