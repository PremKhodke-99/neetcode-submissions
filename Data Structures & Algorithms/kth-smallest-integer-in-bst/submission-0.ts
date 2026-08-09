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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let result: number | null = null;

        function inOrder(node: TreeNode | null) : void{
            if(!node || k === 0) return;

            inOrder(node.left);
            k--;
            if(k === 0){
                result = node.val;
                return;
            }
            inOrder(node.right);
        }

        inOrder(root);
        return result;
    }
}
