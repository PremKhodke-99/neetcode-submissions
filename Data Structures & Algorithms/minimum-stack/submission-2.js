class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push({
            value: val,
            min: !this.stack.length ? val : Math.min(val, this.getMin())
        })
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].value;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}
