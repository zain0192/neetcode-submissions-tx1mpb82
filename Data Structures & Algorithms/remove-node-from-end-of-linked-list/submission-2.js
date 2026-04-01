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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0
        let temp = head
        while (temp !== null) {
            length++
            temp = temp.next;
        }

        if (length === 1 && n === 1) {
            return null
        }

        let toRemove = length - n
        let current = head
        for(let i=0; i<=toRemove; i++) {   
            if(i === toRemove - 1) {
                if(n === 1) {
                    current.next = null
                } else {
                    current.next = current.next.next
                }
            } else {
                if(toRemove === 0) {
                    head = head.next
                }  else {
                    current = current.next
                }

            }
        }

        return head
    }
}
