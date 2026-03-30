class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length - 1;
        let maxArea = 0;

        while (start < end) {
            let height = (heights[start] < heights[end]) ? heights[start] : heights[end]
            let width = end - start

            let area = width * height;
            if(area > maxArea) {
                maxArea = area;
            }

            if(heights[start] < heights[end]) {
                start++
            } else {
                end--
            }
        }

        return maxArea
    }
}
