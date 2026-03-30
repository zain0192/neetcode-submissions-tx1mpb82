class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let ts = '';

        for (let i = 0; i < s.length; i++) {
            if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= "A" && s[i] <= "Z") || (s[i] >= '0' && s[i] <= '9')) {
                ts = ts + s[i];
            }
        }

        ts = ts.toLowerCase();
        let half = Math.floor(ts.length);
        let end = ts.length - 1;
        let flag = true;

        for (let i = 0; i<half; i++) {
            if(ts[i] !== ts[end]) {
                flag = false;
                break;
            }
            end--
        }

        return flag;
    }
}
