class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = height.length - 1;
        let leftmax = 0, rightmax = 0, result = 0;
        while(left <= right){
            if(height[left] <= height[right]){
                if(height[left] >= leftmax){
                    leftmax = height[left];
                }else{
                    result += leftmax - height[left]
                }
                left++;
            }else{
                if(height[right] >= rightmax){
                    rightmax = height[right];
                }else{
                    result += rightmax - height[right]
                }
                right--;
            }
        }
        return result;
    }
}
