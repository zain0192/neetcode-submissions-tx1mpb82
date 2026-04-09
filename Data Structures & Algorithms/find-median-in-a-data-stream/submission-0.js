class MedianFinder {
    constructor() {
        this.arr = []
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.arr.push(num)
        this.arr.sort((a,b) => a - b)
    }

    /**
     * @return {number}
     */
    findMedian() {
        let length = this.arr.length
        let half = Math.floor (length / 2)

        if (length % 2 === 0) {
            return ((this.arr[half - 1] + this.arr[half]) / 2)
        } else {
            return this.arr[half]
        }
    }
}
