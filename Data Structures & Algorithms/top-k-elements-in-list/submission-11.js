class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {}
        let highest = 0

        for(let num of nums) {
            counts[num] = (counts[num] || 0) + 1
            if (counts[num] > highest) {
                highest = counts[num]
            }
        }

        console.log(counts)
        const output = Object.entries(counts).map(([num, freq]) => [
            freq,
            parseInt(num)
        ])
        output.sort((a,b) => b[0] - a[0])
        return output.slice(0, k).map((pair) => pair[1])
    }
}
