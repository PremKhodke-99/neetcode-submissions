class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {

        while(stones.length > 1){
        stones.sort((a,b) => a - b);
            const x = stones.pop();
            const y = stones.pop();

            if(x !== y){
                const diff = x - y;
                stones.unshift(diff);
            }
        }

        return stones.length === 1 ? stones[0] : 0;
    }
}
