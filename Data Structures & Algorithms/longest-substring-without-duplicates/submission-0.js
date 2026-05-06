class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
        if(n === 0 || n === 1) return n;
        let set = new Set();
        let maxLength = 0, left = 0;
        for(let i = 0; i < n; i++){
            while(set.has(s[i])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[i]);
            maxLength = Math.max(maxLength, i - left + 1);
        }

        return maxLength;
    }
}
