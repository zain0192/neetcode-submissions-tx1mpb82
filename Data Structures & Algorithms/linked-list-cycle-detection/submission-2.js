/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let lp = head;
        let rp = null;

        if (lp === null) {
            rp = null;
        } else if (lp.next !== null) {
            rp = lp.next
        }

        let flag = false;

        while (rp !== null) {
            if(lp.val === rp.val) {
                flag = true;
                break
            }

            lp = lp.next;
            if(rp.next !== null) {
                rp = rp.next.next;
            } else {
                rp = null
            }
        }

        return flag;
    }
}
