class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let words = []
        let i = 0
        
        while (i < s.length) {
            if (s[i] !== ' ') {
                let word = ''
                while (s[i] !== ' ' && i < s.length) {
                    word = word + s[i]
                    
                    i++
                }

                words.push(word)
            }
            i++
        }
        
        let length = words[words.length - 1].length
        return length
    }
}
