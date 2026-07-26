//Definition for singly-linked list.
// class ListNode {
//     public val; 
//     public next;
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let curr: ListNode = head;
        let prev = null;
        let nextNode;
        
        while(curr){
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        return prev; 
    }
}
