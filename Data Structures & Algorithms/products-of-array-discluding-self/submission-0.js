class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let result = new Array(n);
        
        result[0] = 1;
        for(let i = 1; i < n; i++){
            result[i] = nums[i - 1] * result[i - 1];
        }

        let rightResult = 1;
        for(let j = n - 1; j >= 0; j--){
            result[j] = result[j] * rightResult;
            rightResult *= nums[j];
        }

        return result;
    }
}
