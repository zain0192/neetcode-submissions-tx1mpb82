class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let p = 0
        for (let i = 0; i < t.length; i++) {
            if(s[p] === t[i]) {
                p++
            }
        }
        if(p === s.length) {
            return true
        } else {
            return false
        }
    }
}
