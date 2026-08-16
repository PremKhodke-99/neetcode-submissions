class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const targetIdx = nums.length - k;

        function quickSelect(left: number, right: number): number{
            if(left === right){
                return nums[left];
            }

            const randomPivot = left + Math.floor(Math.random() * (right - left + 1));
            [nums[randomPivot], nums[right]] = [nums[right], nums[randomPivot]];

            const pivot = nums[right];
            let partitionIdx = left;
            for(let i = left; i < right; i++){
                if(nums[i] <= pivot){
                    [nums[partitionIdx], nums[i]] = [nums[i], nums[partitionIdx]];
                    partitionIdx++;
                }
            }

            [nums[partitionIdx], nums[right]] = [nums[right], nums[partitionIdx]];

            if(partitionIdx === targetIdx){
                return nums[partitionIdx];
            } else if(partitionIdx < targetIdx){
                return quickSelect(partitionIdx + 1, right);
            } else{
                return quickSelect(left, partitionIdx - 1);
            }
        }

        return quickSelect(0, nums.length - 1);
    }
}
