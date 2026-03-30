class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let half = Math.floor(s.length / 2)
        let end = s.length - 1

        for (let i = 0; i<half; i++) {
            [s[i], s[end]] = [s[end], s[i]]
            console.log(s[i]);
            end--
        }
    }
}
