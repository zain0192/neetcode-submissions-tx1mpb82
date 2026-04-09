class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const minHeap = new MaxPriorityQueue()
        
        for (let s of stones) {
            minHeap.enqueue(s)
        }

        while (minHeap.size() > 1) {
            let s1 = minHeap.dequeue()
            let s2 = minHeap.dequeue()

            console.log(s1, s2)

            let dif = Math.abs(s1 - s2)
            if(dif > 0) {
                minHeap.enqueue(dif)
            }
        }

        if (minHeap.isEmpty()) {
            return 0
        } else {
            let output = minHeap.dequeue()
            return output
        }
    }
}
