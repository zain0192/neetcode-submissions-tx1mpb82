class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = {};
        let flag = true;

        if(s.length !== t.length) {
            flag = false;
        } else {
            for (let i = 0; i < s.length; i++) {
                count[s[i]] = (count[s[i]] || 0) + 1
            }

            for (let j = 0; j < t.length; j++) {
                if(count[t[j]] > 0) {
                    count[t[j]]--
                } else {
                    flag = false;
                    break;
                }
            }
        }

        return flag;
    }
}
