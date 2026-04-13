class WordDictionary {
    constructor() {
        this.keys = new Map()
        this.isEnd = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        function add (w, n) {
            if (w.length === 0) {
                n.isEnd = true
                return
            }
            let next
            if(!n.keys.has(w[0])) {
                next = new WordDictionary()
                n.keys.set(w[0], next)
            } else {
                next = n.keys.get(w[0])
            }
            add (w.substr(1), next)
        }

        add(word, this)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function s (w, n) {
            if (w.length === 0) {
                return n.isEnd === true;
            }

            if (w[0] === '.') {
                for (let [k,c] of n.keys) {
                    let f = s (w.substr(1), c)
                    if (f === true) {
                        return true
                    }
                }
                return false
            } else if (!n.keys.has(w[0])) {
                return false
            } else {
                let next = n.keys.get(w[0])
                return s (w.substr(1), next)
            }
        }

        return s (word, this)
    }
}
