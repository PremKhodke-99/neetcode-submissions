// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if(!head){
            return null;
        }

        let curr: Node = head;
        while(curr !== null){
            const nextNode = curr.next;
            const copyNode = new Node(curr.val, nextNode, null);
            curr.next = copyNode;
            curr = nextNode;
        }

        curr = head;
        while(curr !== null){
            if(curr.random !== null){
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        curr = head;
        const cloneHead = head.next;
        let copyCurr = cloneHead;

        while(curr !== null){
            curr.next = curr.next.next;
            copyCurr.next = copyCurr.next ? copyCurr.next.next : null;

            curr = curr.next;
            copyCurr = copyCurr.next;
        }

        return cloneHead;
    }
}
