class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0, right = nums.length - 1;

        while(left <= right){
            let mid = Math.floor((right + left)/2);

            if(nums[mid] == target){
                return mid;
            }
            if(nums[left] <= nums[mid]){
                if(target >= nums[left] && nums[mid] > target){
                    right = mid - 1;
                }else {
                    left = mid + 1;
                }
            } else {
                if(nums[right] >= target && nums[mid] < target){
                    left = mid + 1;
                }else {
                    right = mid - 1;
                }
            }  
        }

        return -1;
    }
}
