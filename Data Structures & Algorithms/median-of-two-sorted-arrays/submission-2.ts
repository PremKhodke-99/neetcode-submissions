class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let m = nums1.length || 0, n = nums2.length || 0;
        
        const sortedArr = new Array(m + n).fill(0);

        let i = 0, j = 0, ind = 0; 

        while(i < m && j < n){
            if(nums1[i] < nums2[j]){
                sortedArr[ind++] = nums1[i++];
            } else{
                sortedArr[ind++] = nums2[j++];
            }
        }
        while(j < n) {
            sortedArr[ind++] = nums2[j++];
        } 
        while(i < m){
            sortedArr[ind++] = nums1[i++];
        }

        let mid = Math.floor((m + n)/2);
        if((m + n) % 2 === 1){
            return sortedArr[mid];
        } else{
            return (sortedArr[mid] + sortedArr[mid - 1])/2
        }
    }
}
