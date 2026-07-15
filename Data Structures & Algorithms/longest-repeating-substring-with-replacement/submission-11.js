class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        
        for(let i = 0; i < s.length; i++){
           let maxF = 0;
           const map = {}
            for (let j = i ; j < s.length; j++){
                if(map[s[j]] == undefined) map[s[j]] = 1;
                else map[s[j]] += 1;
                maxF = Math.max(maxF,map[s[j]])
                if(j-i + 1 - maxF <= k){
                    res = Math.max(res, j-i+1)
                }
            }
        }
        return res

       
    }
}
