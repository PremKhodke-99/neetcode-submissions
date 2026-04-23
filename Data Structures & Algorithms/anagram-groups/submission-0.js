class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let i = 0; i < strs.length; i++){
            let word = strs[i].split('').sort().join('');

            if(!map.has(word)){
                map.set(word, []);
            }

            map.get(word).push(strs[i]);
        }

        return Array.from(map.values());
    }
}
