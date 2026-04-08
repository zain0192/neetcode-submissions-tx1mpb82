class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let p = 0
        for (let i = 0; i < s.length; i++) {
            if (t[p] === s[i]) {
                p++
            }
        }

        if(p === t.length) {
            return 0
        } else {
            return t.length - p
        }
    }
}
