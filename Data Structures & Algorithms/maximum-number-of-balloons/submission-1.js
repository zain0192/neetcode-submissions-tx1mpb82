class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let map = []
        for (let t of text) {
            if(t === 'b' || t === 'a' || t === 'l' || t === 'o' || t === 'n' ) {
                map[t] = (map[t] || 0) + 1
            }
        }

        let count = 0
        while (map['b'] > 0 && map['a'] > 0 && map['l'] > 1 && map['o'] > 1 && map['n'] > 0) {
            map['b']--
            map['a']--
            map['n']--
            map['l'] = map['l'] - 2
            map['o'] = map['o'] - 2
            count++
        }

        return count
    }
}
