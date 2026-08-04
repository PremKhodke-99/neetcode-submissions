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

    diameterOfBinaryTree(root: TreeNode | null): number {
        let maxdia = 0;
        function getHeight(node: TreeNode | null): number {
            if (!node) return 0;
            const leftDia = getHeight(node.left);
            const rightDia = getHeight(node.right);

            maxdia = Math.max(maxdia, leftDia + rightDia);
            return 1 + Math.max(leftDia, rightDia);
        }
        getHeight(root);
        return maxdia;
    }
}
