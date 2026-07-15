class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        for (let i = 0; i < s.length; i++){
            const set = new Set()
            set.add(s[i])
            for (let j = i +1; j < s.length; j++){
                if(set.has(s[j])) {  
                    break;
                }
                
                set.add(s[j])
            }
            longest = Math.max(longest,set.size)
        }
        return longest
    }
}
