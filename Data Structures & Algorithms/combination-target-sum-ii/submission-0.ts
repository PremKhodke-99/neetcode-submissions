class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        let result: number[][] = [];
        let currentPair: number[] = [];
        candidates.sort((a , b) => a - b);

        function backtrack(startIdx: number, remain: number): void{
            if(remain === 0){
                result.push([...currentPair]);
                return;
            }

            for(let i = startIdx; i < candidates.length; i++){
                let num = candidates[i];
                if(remain - num < 0) break;

                if(i > startIdx && num === candidates[i - 1]) continue;

                currentPair.push(num);
                backtrack(i + 1, remain - num);
                currentPair.pop();
            }
        }

        backtrack(0, target);
        return result;
    }
}
