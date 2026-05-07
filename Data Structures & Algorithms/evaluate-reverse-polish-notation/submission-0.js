class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let n = tokens.length;

        for (let i = 0; i < n; i++) {
            let char = tokens[i];
            switch (char) {
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                case "-":
                    stack.push(-stack.pop() + stack.pop());
                    break;
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "/":
                    stack.push(Math.trunc(1 / (stack.pop() / stack.pop())));
                    break;
                default:
                    stack.push(Number(char));
                    break;
            }
        }

        return stack[0];
    }
}
