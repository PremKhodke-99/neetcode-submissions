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
     * @param {number} k
     * @return {ListNode}
     */
    getKthNode(curr: ListNode | null, k: number): ListNode | null{
        while(curr !== null && k > 0){
            curr = curr.next;
            k--;
        }
        return curr;
    }
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        if(!head || k === 1) return head;

        const dummass = new ListNode(0, head);
        let prevGroup: ListNode = dummass;

        while(true){
            const kth = this.getKthNode(prevGroup, k);
            if(!kth) break;

            const nextGroup = kth.next;

            let prev = kth.next;
            let curr = prevGroup.next;

            while(curr !== nextGroup){
                const temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            const temp = prevGroup.next;
            prevGroup.next = kth;
            prevGroup = temp;
        }

        return dummass.next;
    }
}
