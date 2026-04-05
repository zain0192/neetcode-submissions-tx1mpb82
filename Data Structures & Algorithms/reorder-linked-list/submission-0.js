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
     * @return {void}
     */
    reorderList(head) {
        let storage = [];
        let copy = head;
        while (copy !== null) {
            storage.push(copy);
            copy = copy.next;
        }

        let i = 0;
        let j = storage.length - 1;
        while (i < j) {
            storage[i].next = storage[j];
            i++;
            if (i >= j) {
                break;
            }
            storage[j].next = storage[i];
            j--;
        }
        storage[i].next = null;
    }

}
