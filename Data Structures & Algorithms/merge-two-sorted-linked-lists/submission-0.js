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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = {val: 0, next: null}
        let lp = list1;
        let rp = list2;
        let output = dummy

        while (lp !== null && rp !== null) {
            if(lp.val <= rp.val) {
                output.next = lp;
                lp = lp.next
            } else {
                output.next = rp;
                rp = rp.next;
            }

            output = output.next
        }

        if(lp) {
            output.next = lp;
        } else {
            output.next = rp;
        }

        return dummy.next

    }
}
