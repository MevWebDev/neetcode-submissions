class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(c){
        return ((c >= 'a' && c<="z") || (c >= 'A' && c<="Z") || (c >= '0' && c<="9"))
    }

    isPalindrome(s) {
        let s2 = ''
        for (const c of s){
            if(this.isAlphaNumeric(c)){
                s2 += c.toLowerCase()
            }
        }
        
        return s2 === s2.split("").reverse().join("");
    }
}
