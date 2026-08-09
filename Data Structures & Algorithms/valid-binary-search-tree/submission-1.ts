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

    isValidBinary(node: TreeNode, min: number, max: number): boolean {
        if (!node) return true;
        if (min < node.val && node.val < max) {
            return (
                this.isValidBinary(node.left, min, node.val) &&
                this.isValidBinary(node.right, node.val, max)
            );
        } else {
            return false;
        }
    }

    isValidBST(root: TreeNode | null): boolean {
        return this.isValidBinary(root, -Infinity, Infinity);
    }
}
