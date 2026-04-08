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
     * @return {boolean}
     */
    isValidBST(root) {
        if (root === null) {
            return true
        }

        return this.checkNode(root, -10000, 10000)

    }

    checkNode(root, min, max) {
        if (root === null) {
            return true
        }

        if(root.val <= min || root.val >= max) {
            return false
        }

        let m = Math.min(min, root.val)
        let ma = Math.max(max, root.val)

        let left = this.checkNode(root.left, m, root.val)
        let right = this.checkNode(root.right, root.val, ma)

        if(left && right) {
            return true
        } else {
            return false
        }
    }
}
