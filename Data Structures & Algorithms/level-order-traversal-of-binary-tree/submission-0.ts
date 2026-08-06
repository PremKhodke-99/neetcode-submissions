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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return [];

        let result: number[][] = [];
        const queue: TreeNode[] = [root];

        while(queue.length > 0){
            const levelSize = queue.length;
            const currentLevel: number[] = [];

            for(let i = 0; i < levelSize; i++){
                const node = queue.shift();
                currentLevel.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }

            result.push(currentLevel);
        }

        return result;
    }
}
