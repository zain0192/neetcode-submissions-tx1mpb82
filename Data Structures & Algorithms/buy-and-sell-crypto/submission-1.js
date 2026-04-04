class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let profit = 0;

        while (right < prices.length) {
            if(prices[left] > prices[right]) {
                left = right;
            } else {
                console.log(prices[left] , prices[right])
                profit = Math.max(profit, (prices[right] - prices[left]))
                
            }
            right++;
        }

        return profit
    }
}
