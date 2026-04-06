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
    diameterOfBinaryTree(root) {
        if (root === null) {
            return 0
        }

        let left = this.maxDepth(root.left)
        let right = this.maxDepth(root.right)

        if(left === 0 && right === 0) {
            return 0
        } else if (left !== 0 && right === 0) {
            return Math.max(this.diameterOfBinaryTree(root.left), left)
        } else if (left === 0 && right !== 0) {
            return Math.max(this.diameterOfBinaryTree(root.right), right)
        } else {
            return left + right
        }


    }

    maxDepth(root) {
        if (root === null) {
            return 0
        } else {
            let left = this.maxDepth(root.left)
            let right = this.maxDepth(root.right)
            return 1 + Math.max(left, right)
        }
    }
}
