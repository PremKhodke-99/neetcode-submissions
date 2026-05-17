class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const indexes= [];
        for(let i = 0; i < n; i++){
            indexes.push(i);
        }
        
        indexes.sort((a,b) => position[b] - position[a]);
        
        let cur = indexes[0];
        let result = 1;

        for(let i = 1; i < n; i++){
            let idx = indexes[i];
            if((target - position[idx]) * speed[cur] > (target - position[cur]) * speed[idx]){
                result++;
                cur = idx
            }
        }
        return result;
    }
}
