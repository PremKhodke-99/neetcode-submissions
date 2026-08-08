/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        if(!root) return 0;

        function dfs(node, value){
            if(!node) return 0;
            let count = 0;

            if(node.val >= value){
                count = 1;
            }

            let newMax = Math.max(value, node.val); 

            count += dfs(node.left, newMax);
            count += dfs(node.right, newMax);

            return count;
        }

        return dfs(root, root.val);
    }
}
