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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const inorderMap = new Map<number, number>();
        for(let i = 0; i < inorder.length; i++){
            inorderMap.set(inorder[i], i);
        }

        let preOrderIndex = 0;

        function arrayToTree(inorderstart: number, inorderend: number): TreeNode | null{
            if(inorderstart > inorderend){
                return null;
            }

            const rootval = preorder[preOrderIndex++];
            const root = new TreeNode(rootval);

            const rootInorderIndex = inorderMap.get(rootval);
            root.left = arrayToTree(inorderstart, rootInorderIndex - 1);
            root.right = arrayToTree(rootInorderIndex + 1, inorderend);

            return root;
        }

        return arrayToTree(0, inorder.length - 1);
    }
}
