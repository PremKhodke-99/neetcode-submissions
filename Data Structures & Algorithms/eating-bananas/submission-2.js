class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function canFinish(k){
            let totalHours = 0;
            for(let p of piles){
                totalHours += Math.ceil(p / k);
            }
            return totalHours <= h;
        }

        let low = 1, high = Math.max(...piles);
        let rate = high;
        // console.log(high);

        while(low <= high){
            let mid = Math.floor(low + (high - low)/2);

            if(canFinish(mid)){
                rate = mid;
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }

        return rate;
    }
}
