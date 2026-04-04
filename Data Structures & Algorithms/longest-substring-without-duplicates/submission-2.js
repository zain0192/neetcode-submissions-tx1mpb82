class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let position = {}
        let l = 0;
        let r = 0;
        let maxLength = 0;

        while (r < s.length) {
            if(position.hasOwnProperty(s[r])) {
                l = Math.max(l, position[s[r]] + 1);
            }
            position[s[r]] = r
            maxLength = Math.max(maxLength, (r-l)+1)
            r++;
        }

        return maxLength;
    }
}
