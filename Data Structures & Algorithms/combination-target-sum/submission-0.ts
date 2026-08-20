class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = [];
        const currentPair: number[] = [];
        nums.sort((a,b) => a - b);

        function backtrack(remain: number, startIdx: number): void{
            if(remain === 0){
                result.push([...currentPair]);
                return
            }

            for(let i = startIdx; i < nums.length; i++){
                const num = nums[i];
                if(remain - num < 0){
                    break;
                }

                currentPair.push(num);
                backtrack(remain - num, i);
                currentPair.pop();
            }
        }

        backtrack(target, 0);
        return result;
    }
}
