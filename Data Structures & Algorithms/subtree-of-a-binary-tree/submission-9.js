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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        
        if (root === null) {
            return null
        }

        if(root.val === subRoot.val) {
            let f = this.checkSub(root, subRoot)
            if (f === true) {
                return true
            }
        }

        let left = this.isSubtree(root.left, subRoot)
        let right = this.isSubtree(root.right, subRoot)

        if (left || right) {
            return true
        } else {
            return false
        }
    }

    checkSub(root, subRoot) {
        if (root === null && subRoot === null) {
            return true
        } else if (root === null || subRoot === null) {
            return false
        }

        if (root.val === subRoot.val) {
            let left = this.checkSub(root.left, subRoot.left)
            let right = this.checkSub(root.right, subRoot.right)

            if (left && right) {
                return true
            } else {
                return false
            }
        }
    }
}
