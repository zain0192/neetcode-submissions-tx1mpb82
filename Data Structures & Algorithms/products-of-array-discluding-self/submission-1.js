class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    getProductOfArr(arr) {
        let product = 1
        for(let i = 0; i < arr.length; i++) {
            product = product * arr[i]
        }
        return product
    }

    productExceptSelf(nums) {
        let products = []

        for (let i = 0; i<nums.length; i++) {
            if(i === 0) {
                let leftProduct = 1
                let rightProduct = this.getProductOfArr(nums.slice(i + 1, nums.length))
                products.push(leftProduct * rightProduct)
            } else if(i === nums.length - 1) {
                let leftProduct = this.getProductOfArr(nums.slice(0, i))
                let rightProduct = 1
                products.push(leftProduct * rightProduct)
            } else {
                let leftProduct = this.getProductOfArr(nums.slice(0, i))
                let rightProduct = this.getProductOfArr(nums.slice(i + 1, nums.length))
                products.push(leftProduct * rightProduct)
            }
        }

        return products
    }
}
