class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
            let s = []

    for (let t of tokens) {
        let n = parseInt(t)
        if(!Number.isNaN(n)) {
            s.push(n)
        } else {
            let n1 = s.pop()
            let n2 = s.pop()
            let result = 0
            if (t === '+') {
                result = (n2 + n1)
            } else if (t === '-') {
                result = (n2 - n1)
            } else if (t === '*') {
                result = (n2 * n1)
            } else if (t === '/') {
                result = (n2 / n1)
            }
            s.push(parseInt(result))
        }
    }
    return s.pop()
    }
}
