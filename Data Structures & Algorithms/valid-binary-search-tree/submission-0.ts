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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        function isValidBinary(node: TreeNode, min: number, max: number): boolean {
            if (!node) return true;

            if (node.val <= min || node.val >= max) return false;

            return (
                isValidBinary(node.left, min, node.val) && isValidBinary(node.right, node.val, max)
            );
        }

        return isValidBinary(root, -Infinity, Infinity);
    }
}
