class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let array = [];
        for(let i = 0; i < s.length; i++){
            let char = s[i];
            switch(char){
                case '(': 
                    array.push(char);
                    break;
                case '[': 
                    array.push(char);
                    break;
                case '{': 
                    array.push(char);
                    break;
                case ')':
                    if(array.pop() !== '('){
                        return false;
                    }
                    break;
                case ']':
                    if(array.pop() !== '['){
                        return false;
                    }
                    break;
                case '}':
                    if(array.pop() !== '{'){
                        return false;
                    }
                    break;
            }
        }

        return array.length === 0;
    }
}
