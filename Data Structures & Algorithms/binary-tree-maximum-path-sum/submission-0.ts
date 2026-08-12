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
    maxPathSum(root: TreeNode | null): number {
        let maxGlobalSum = -Infinity;

        function getGlobalSum(node: TreeNode): number{
            if(!node) return 0;

            const leftSum = Math.max(getGlobalSum(node.left), 0);
            const rightSum = Math.max(getGlobalSum(node.right), 0);

            const currSum = node.val + leftSum + rightSum;
            maxGlobalSum = Math.max(maxGlobalSum, currSum);

            return node.val + Math.max(leftSum, rightSum);
        }

        getGlobalSum(root);
        return maxGlobalSum;
    }
}
