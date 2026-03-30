class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let word = strs[0]
        let pre = ''

        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            let flag = true
            for (let j = 0; j < strs.length; j++) {
                if (char !== strs[j][i]) {
                    flag = false;
                }
            }

            if (flag === true) {
                pre = pre + char;
            } else {
                break;
            }
        }

        return pre
    }
}
