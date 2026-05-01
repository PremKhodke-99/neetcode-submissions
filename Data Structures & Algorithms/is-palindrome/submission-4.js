class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let ltr = '';
        s = s.toLowerCase();
        for(let i = 0; i < s.length; i++){
            if(s[i] !== ' ' && ((s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) || (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57))){
                ltr += s[i];
            }
        }
        let rtl = ltr.split('').reverse().join('');
        return rtl === ltr;
    }
}
