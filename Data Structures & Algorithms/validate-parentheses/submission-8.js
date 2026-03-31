class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isValid(s) {
    let stack = [];
    const map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            // check top of stack
            if (stack.length > 0 && stack[stack.length - 1] === map[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
}

}
