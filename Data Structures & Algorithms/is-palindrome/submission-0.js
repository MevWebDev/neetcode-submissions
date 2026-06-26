class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const s2 = s.split("").filter((c) => c.match(/[a-zA-Z0-9]/)).map((c)=>c.toLowerCase())  
        for(let i = 0; i < s2.length / 2; i++){
            if(s2[i]!==s2[s2.length-1 - i]) return false
        }
        return true
    }
}
