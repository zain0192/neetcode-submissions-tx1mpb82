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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let output = {
            val: 0,
            next: null
        }
        let lp = l1
        let rp = l2
        let carry = 0
        let copy = output

        while (lp || rp) {
            let dummy = {
                val: 0,
                next: null
            }
            let sum = (lp?.val || 0) + (rp?.val || 0);
            if(carry !== 0) {
                sum = sum + carry
                carry = 0
            }
            
            if (sum < 10) {
                dummy.val = sum
            } else {
                dummy.val = sum - 10
                carry = 1
            }
            copy.next = dummy;
            copy = copy.next;

            if(lp) {
                lp = lp.next;
            }
            if(rp) {
                rp = rp.next;
            }
        }

        if(carry !== 0) {
            copy.next = {
                val: 1,
                next: null
            }
        }

        return output.next
    }
}
