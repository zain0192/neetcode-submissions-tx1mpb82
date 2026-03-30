class MinStack {
    constructor() {
        this.stack = [];
        this.lastMin = [];
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)

        if(val <= this.min || this.min === null) {
            this.min = val;
            this.lastMin.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack[this.stack.length - 1] === this.min) {
            this.lastMin.pop()
            console.log(this.lastMin)
            if(this.lastMin.length > 0) {
                this.min = this.lastMin[this.lastMin.length - 1]
            } else {
                this.min = null
            }
        }
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
