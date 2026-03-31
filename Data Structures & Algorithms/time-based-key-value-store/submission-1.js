class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let values = this.keyStore.get(key)
        console.log(values)
        if(values !== undefined) {
            values[timestamp] = value
            this.keyStore.set(key,values)
        } else {
            let arr = {}
            arr[timestamp] = value;
            this.keyStore.set(key,arr)
        } 
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let values = this.keyStore.get(key)
        if(values !== undefined) {
            if(values[timestamp] !== undefined) {
                return values[timestamp]
            } else {
                for(let i = timestamp; i >= 0; i--) {
                    if(values[i] !== undefined) {
                        return values[i]
                    }
                }
            }
        }
        
        return ""
    }
}
