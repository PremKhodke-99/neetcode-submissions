class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let array = [];
        let obj = {
            '(' : ')',
            '[' : ']',
            '{' : '}'
        }

        for(let char of s){
            if(obj[char]){
                array.push(obj[char]);
            }else{
                if(array.pop() !== char) return false;
            }
        }

        return array.length === 0;
    }
}
