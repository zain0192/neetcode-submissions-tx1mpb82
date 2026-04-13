class PrefixTree {
    constructor() {
        this.keys = new Map()
        this.isEnd = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        function add (w, n) {
            let next
            if (w.length === 0) {
                n.isEnd = true
                return
            }

            if (n.keys.has(w[0])) {
                next = n.keys.get(w[0])
            } else {
                next = new PrefixTree()
                n.keys.set(w[0], next)
            }

            add(w.substr(1), next)
        }

        add(word, this)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        
        function s (w, n) {
            if (w.length === 0 && n.isEnd === true) {
                return true
            }

            if(!n.keys.has(w[0])) {
                return false
            } else {
                let next = n.keys.get(w[0])
                return s (w.substr(1), next)
            }
        }

        return s(word, this)
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        function s (w, n) {
            if (w.length === 0) {
                return true
            }

            if(!n.keys.has(w[0])) {
                return false
            } else {
                let next = n.keys.get(w[0])
                return s (w.substr(1), next)
            }
        }

        return s(prefix, this)
    }
}
