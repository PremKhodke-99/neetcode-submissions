class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashmap = new Map();
        for(let i = 0; i < nums.length; i++){
            if(hashmap.has(nums[i])){
                hashmap.set(nums[i], 1);
                return true;
            }else{
                hashmap.set(nums[i], 1);
            }
        }
        return false;
    }
}
