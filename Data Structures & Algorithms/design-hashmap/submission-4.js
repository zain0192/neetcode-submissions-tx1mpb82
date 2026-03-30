class MyHashMap {
    constructor() {
        this.keys = []
        this.values = []
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let index = this.keys.indexOf(key)
        if(index === -1) {
            this.keys.push(key)
            this.values.push(value)
        } else {  
            this.values[index] = value;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let index = this.keys.indexOf(key)
        return index === -1 ? index : this.values[index];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.keys.indexOf(key)
        if (index !== -1) {
            this.keys.splice(index, 1)
            this.values.splice(index, 1);
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
