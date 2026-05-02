class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let l = 0, r = n - 1;
        let area = 0;

        while(l < r){
            let wide = r - l;
            let high = Math.min(heights[l], heights[r]);
            area = Math.max(area, wide * high);

            if(heights[l] < heights[r]){
                l++;
            }else if(heights[l] > heights[r]){
                r--;
            }else{
                l++;
                r--;
            }
        } 
        return area;
    }
}
