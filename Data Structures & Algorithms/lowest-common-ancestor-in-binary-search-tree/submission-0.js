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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let val = [p.val, q.val]
        if (root === null) {
            return null
        }

        if (val.includes(root.val)) {
            return root
        }
        
        let left = this.lowestCommonAncestor(root.left, p, q)
        let right = this.lowestCommonAncestor(root.right, p, q)

        if (left !== null && right !== null) {
            return root
        } else if (left !== null && right === null) {
            return left
        } else {
            return right
        }
 
    }
}
