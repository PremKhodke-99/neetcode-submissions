class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index < 0) return -1;
        let i = 0;
        let curr = this.head;
        while(i < index && curr !== null){
            curr = curr.next;
            i++;
        }
        return curr !== null ? curr.value : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        if(index < 0 || this.head == null) return false;
        let curr = this.head;
        if(index == 0){
            this.head = this.head.next;
            return true;
        }
        while(i < index - 1 && curr !== null){
            curr = curr.next;
            i++;
        }
        if(curr == null || curr.next == null){
            return false;
        }
        curr.next = curr.next.next;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let values = [];
        let curr = this.head;
        while(curr){
            values.push(curr.value);
            curr = curr.next;
        }
        return values;
    }
}
