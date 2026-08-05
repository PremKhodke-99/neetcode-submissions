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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSame(a: TreeNode | null, b: TreeNode | null): boolean {
        if(!a && !b) return true;
        if(!a || !b || a.val !== b.val) return false;

        return this.isSame(a.left, b.left) && this.isSame(a.right, b.right);
    }
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if(!root) return false;
        if(!subRoot) return true;

        if(this.isSame(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
