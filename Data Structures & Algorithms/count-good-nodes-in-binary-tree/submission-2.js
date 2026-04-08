/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        if (root === null) {
            return null
        }
    
        let count = this.checkNode(root, -1000)

        return count
    }

    checkNode(root, v) {
        if (root === null) {
            return 0
        }
        
        let count = 0
        let val = v

        if(root.val >= v) {
            count++
            val = root.val
        }

        return this.checkNode(root.left, val) + this.checkNode(root.right, val) + count
        
    }
}
