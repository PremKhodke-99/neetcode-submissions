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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const parts: string[] = [];

        function dfs(node: TreeNode | null){
            if(!node){
                parts.push('N');
                return;
            }
            parts.push(node.val.toString());
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return parts.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        if(!data) return null;

        const tokens = data.split(',');
        let index = 0;

        function buildtree(){
            if(index >= tokens.length){
                return null;
            }

            const token = tokens[index++];
            if(token === 'N'){
                return null;
            }
            const node = new TreeNode(parseInt(token, 10));
            node.left = buildtree();
            node.right = buildtree();

            return node;
        }

        return buildtree();
    }
}
