class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result: number[][] = [];
        const currentPath: number[] = [];

        function backtrack(startIdx): void{
            result.push([...currentPath]);

            for(let i = startIdx; i < nums.length; i++){
                currentPath.push(nums[i]);
                backtrack(i + 1);
                currentPath.pop();
            }
        }

        backtrack(0);
        return result;
    }
}
