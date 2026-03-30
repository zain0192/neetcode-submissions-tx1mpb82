class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            // Check skipping left or skipping right
            let skipLeft = true;
            let i = start + 1, j = end;
            while (i < j) {
                if (s[i] !== s[j]) {
                    skipLeft = false;
                    break;
                }
                i++;
                j--;
            }

            let skipRight = true;
            i = start; j = end - 1;
            while (i < j) {
                if (s[i] !== s[j]) {
                    skipRight = false;
                    break;
                }
                i++;
                j--;
            }

            return skipLeft || skipRight;
        }
        start++;
        end--;
    }
    return true;

    }
}
