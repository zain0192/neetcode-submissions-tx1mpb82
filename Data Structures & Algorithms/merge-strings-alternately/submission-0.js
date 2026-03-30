class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let p1=0;
        let p2=0;
        let output = ''

        while(word1[p1] !== undefined || word2[p2] !== undefined) {
            if(word1[p1] !== undefined) {
                output = output + word1[p1]
                p1++;
            }
            if(word2[p2] !== undefined) {
                output = output + word2[p2]
                p2++;
            }
        }

        return output
    }
}
