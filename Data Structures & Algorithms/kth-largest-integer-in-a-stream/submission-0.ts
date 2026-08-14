class KthLargest {
    private k: number;
    private nums: number[];
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums.sort((a,b) => a - b);

        if(this.nums.length > this.k){
            this.nums = this.nums.slice(this.nums.length - this.k);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        let low = 0, high = this.nums.length - 1;
        let insertIdx = this.nums.length;

        while(low <= high){
            let mid = Math.floor((low + high)/2);
            if(this.nums[mid] >= val){
                insertIdx = mid;
                high = mid - 1;
            } else{
                low = mid + 1;
            }
        }

        this.nums.splice(insertIdx, 0, val);
        if(this.nums.length > this.k){
            this.nums.shift();
        }

        return this.nums[0];
    }
}
