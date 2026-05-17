class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0, j = nums.length - 1;
        
        while(i <= j){
            let m = i + Math.floor((j - i)/2);
            if(nums[m] == target) return m;
            if(nums[m] > target){
                j = m - 1;
            }else{
                i = m + 1;
            }
        }

        return -1;
    }
}
