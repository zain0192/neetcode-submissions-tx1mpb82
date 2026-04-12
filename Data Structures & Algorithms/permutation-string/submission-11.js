class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Sorted = s1.split("").sort().join("")
        let l = 0;
        let r = s1.length;
        while(r <= s2.length) {
            let s2Splice = s2.slice(l, r).split("").sort().join("")
            if(s1Sorted === s2Splice) {
                return true
            }
            l++;
            r++;
        }

        return false

    }
}
