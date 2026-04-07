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
     * @return {number[]}
     */
    preorderTraversal(root) {
        if (root === null) {
            return []
        }

        let res = []
        let stack = [root]

        while (stack.length > 0) {
            let node = stack.pop()
            res.push(node.val)

            if(node.right !== null) {
                stack.push(node.right)
            }

            if(node.left !== null) {
                stack.push(node.left)
            }

        }

        return res
    }
}
