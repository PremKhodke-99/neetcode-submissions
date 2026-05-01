class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let n = nums.length;
        if(n == 0) return 0;
        nums.sort((a,b) => a - b);
        let currentStreak = 1, longestStreak = 1;
        
        for(let i = 1; i < n; i++){
            if(nums[i] !== nums[i - 1]){
                if(nums[i] == nums[i - 1] + 1){
                    currentStreak++;
                }else{
                    longestStreak = Math.max(longestStreak, currentStreak);
                    currentStreak = 1;
                }
            }
        }

        return Math.max(longestStreak, currentStreak);
    }
}
