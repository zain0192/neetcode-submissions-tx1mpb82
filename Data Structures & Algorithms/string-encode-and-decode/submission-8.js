class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length > 0) {
            let output = strs[0].length + '#'
            for (let i = 0; i < strs.length; i++) {
                output = output + strs[i];
                if(strs[i+1] !== undefined) {
                    output = output + strs[i+1].length + '#'
                }
            }
            console.log(output)
            return output;
        } else {
            return ''
        }
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let output = [];

        while(i < str.length) {
            let toMoveStr = ''
            while(str[i] !== '#') {
                toMoveStr = toMoveStr + str[i]
                i++
            }
            let toMove = parseInt(toMoveStr)
            i++
            let word = str.slice(i, i + toMove)
            output.push(word)
            i = i + toMove
        }

        return output
    }
}
